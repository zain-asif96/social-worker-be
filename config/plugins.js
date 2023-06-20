module.exports = ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
  },

  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_SECRET,
        region: process.env.AWS_REGION,
        params: {
          Bucket: process.env.AWS_BUCKET,
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null,
        },
        uploadStream: {
          ACL: null,
        },
      },
    },
  },
  //...
});
