const AWS = require('aws-sdk');

const bucketName = process.env.AWS_BUCKET;

var s3 = new AWS.S3({
  signatureVersion: 'v4',
});

exports.handler = async (event, context, callback) => {
  const { username } = event.queryStringParameters;
  const url = s3.getSignedUrlPromise('putObject', {
    Bucket: bucketName,
    Key: username,
    Expires: 600,
  });
  return url;
};
