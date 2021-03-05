module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIA3BTGWESRV2AKN56P'),
      secretAccessKey: env('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'),
      region: env('eu-north-1'),
      params: {
        Bucket: env('tankedeling-images'),
      },
    },
  },
});
