var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;

var basedir = __dirname;

var execOpts = { encoding: 'utf8' };
var gitRev = execSync('git rev-parse HEAD', execOpts);
var gitDate = execSync('git show -s --format=%ci ${GIT_REV}', execOpts);


fs.writeFileSync(path.join(basedir, 'src', 'version.js'),
                 'export const gitRev = "' + gitRev.trim() + '";\n' +
                 'export const gitDate = "' + gitDate.trim() + '";\n');


module.exports = [
  {
    context: path.join(basedir, "src"),
    entry: ["babel-polyfill", "./scripts/systreKey"],
    output: {
      path: path.join(basedir, "public", "js"),
      filename: "systreKey.js"
    },
    module: {
      rules: [
        { test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader" }
      ]
    },
    resolve: {
      extensions: [ ".js" ]
    }
  }
];
