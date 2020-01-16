const fs = require('fs-extra');
const path = require('path');
const semver = require('semver');
const execa = require('execa');

/**
 * inspired by Ionic - git@github.com:ionic-team/ionic.git
 */

const rootDir = path.join(__dirname, '../');

function readPkg() {
  const packageJsonPath = packagePath();
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
}

function packagePath() {
  return path.join(rootDir, 'package.json');
}

async function preparePkg(versionType, commitMessage) {
  const pkg = readPkg();
  console.log(`Old version: ${pkg.version}`);
  // Bump package version
  const newVersion = semver.inc(pkg.version, versionType);
  pkg.version = newVersion;
  console.log(`New version: ${newVersion}`);
  writePkg(pkg);
  await tagCommit(newVersion, commitMessage);
}

function writePkg(pkg) {
  const packageJsonPath = packagePath();
  const text = JSON.stringify(pkg, null, 2);
  console.log('Writing new package.json');
  return fs.writeFileSync(packageJsonPath, `${text}\n`);
}

async function tagCommit(version, commitMessage) {
  const addCmd = 'git add -A';
  console.log(`$ ${addCmd}`);
  await execa.command(addCmd).then(() => {
    const commitCmd = `git commit -m \"${commitMessage}\"`;
    console.log(`$ ${commitCmd}`);
    execa.command(commitCmd, { shell: true }).then(() => {
      const tagCmd = `git tag ${version}`;
      console.log(`$ ${tagCmd}`);
      execa.command(tagCmd).then(() => console.log(`You can publish this to NPM using the following command:\n\n\tgit push origin ${version}\n`));
    });
  });
}

module.exports = {
  readPkg,
  rootDir,
  packagePath,
  preparePkg,
  writePkg,
};
