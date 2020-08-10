const fs = require('fs').promises;
const path = require('path');

function getManifest() {
    return Promise.all([
        fs.readFile(path.resolve('public', 'manifest.json')),
        // fs.readFile(path.resolve('public', 'dll-manifest.json')),
    ]).then((files) => {
        let manifest = {};
        files.forEach((file) => {
            manifest = { ...manifest, ...JSON.parse(file) };
        });
        return manifest;
    });
}

module.exports = getManifest;
