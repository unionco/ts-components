const fs = require('fs-extra');
const path = require('path');
const semver = require('semver');

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

function preparePkg(versionType) {
    const pkg = readPkg();
    console.log(`Old version: ${pkg.version}`);
    // Bump package version
    const newVersion = semver.inc(pkg.version, versionType);
    pkg.version = newVersion;
    console.log(`New version: ${newVersion}`);
    writePkg(pkg);
}

function writePkg(pkg) {
    const packageJsonPath = packagePath();
    const text = JSON.stringify(pkg, null, 2);
    console.log('Writing new package.json');
    return fs.writeFileSync(packageJsonPath, `${text}\n`);
}

module.exports = {
    readPkg,
    rootDir,
    packagePath,
    preparePkg,
    writePkg
};