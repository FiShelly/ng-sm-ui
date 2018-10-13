const fs = require('fs');
const path = require('path');
const orgPackageJsonPath = path.join(process.cwd(), 'projects/components/package.json');
const buildPackageJsonPath = path.join(process.cwd(), 'dist/ng-sm-ui/package.json');

console.log('>> read package.json success.');

const buildPackageJson = JSON.parse(fs.readFileSync(buildPackageJsonPath));
const orgPackageJson = JSON.parse(fs.readFileSync(orgPackageJsonPath));
let args = process.argv.splice(3)[0];

if (!args) {
    args = Number(orgPackageJson.version) + '0.0.1';
}

buildPackageJson.version = orgPackageJson.version = args;

console.log('>> set version success.');

fs.writeFileSync(orgPackageJsonPath, JSON.stringify(orgPackageJson, null, 4));
fs.writeFileSync(buildPackageJsonPath, JSON.stringify(buildPackageJson, null, 4));

console.log('>> write package.json success.');

console.info('>> change version success.');

