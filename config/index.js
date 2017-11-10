const path = require('path')
const glob = require('glob')//
var build = {
  env: require('./prod.env'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  bundleAnalyzerReport: process.env.npm_config_report
}
//根据getEntry获取所有入口主页面//
var pages = getEntry('src/pages/**/*.html');

//每个入口页面生成一个入口添加到build中//
for (var pathname in pages) {
  build.pathname = path.resolve(__dirname, '../dist/' + pathname + '.html')
}
module.exports = {
  build: build,//生成的配置build
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  },
  getEntry:getEntry
}

//获取所有入口文件//
function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;
  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    pathname = basename.split("_")[0];
    entries[pathname] = entry;
  });
  return entries;
}