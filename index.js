const FastBootAppServer = require('fastboot-app-server');
// const S3Downloader = require('fastboot-s3-downloader');
//
// const downloader = new S3Downloader({
//   bucket: "smiley-home-fastboot",
//   key: "fastboot-deploy-info.json"
// });

const server = new FastBootAppServer({
  // downloader: downloader
  distPath: "./dist"
});

server.start();
