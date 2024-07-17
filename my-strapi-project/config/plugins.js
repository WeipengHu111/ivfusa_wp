module.exports = ({ env }) => ({
  tinymce: {
    enabled: true,
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10000000, // 10MB limit
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  documentation: {
    enabled: true,
  },
});
