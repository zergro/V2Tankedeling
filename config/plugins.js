module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIAQAQ523AQTSWOCLDN'),
      secretAccessKey: env('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'),
      region: env('eu-central-1'),
      params: {
        Bucket: env('tankedeling-strapi-images'),
      },
    },
  },
});
