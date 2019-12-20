const fs = require('fs-extra');
const { join } = require('path');
const { startCase } = require('lodash');
const SVGO = require('svgo');

function createComponent(path, name, content) {
  fs.writeFileSync(path, `
// GENERATE BY ./scripts/build-icon.js
// DON NOT EDIT IT MANUALLY
import { styled } from '../../../styles';

const ${name} = styled.div.attrs({
  dangerouslySetInnerHTML: {
    __html: '${content.data}'
  }
})\`
  display: inline-block;
\`

export default ${name};
`
  );
}

function build(rootDir) {
  const srcDir = join(rootDir, 'src');
  const srcSvgDir = join(srcDir, 'svgs');
  const iconDir = join(srcDir, 'components', 'Icon', 'icons');

  const svgo = new SVGO({
    plugins: [
      { cleanupAttrs: true },
      { removeDoctype: true },
      { removeXMLProcInst: true },
      { removeViewBox: false },
      { convertPathData: true },
    ]
  });

  // clean up first
  fs.emptyDirSync(iconDir);

  const svgFiles = fs.readdirSync(srcSvgDir);

  svgFiles.forEach((fileName) => {
    const nameOnly = fileName.replace('.svg', '');
    const componentName = startCase(nameOnly).replace(/ /g, '');
    const componentPath = `${iconDir}/${componentName}.tsx`;
    const contents = fs.readFileSync(`${srcSvgDir}/${fileName}`);

    svgo.optimize(contents, { path: componentPath })
      .then(result => {
        createComponent(componentPath, componentName, result);
      })
  })
}

build(join(__dirname, '..'));
