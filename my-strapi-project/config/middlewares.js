module.exports = [
  {
    name: "strapi::errors",
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "connect-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "blob:", "*.strapi.io"],
          "img-src": [
            "'self'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "data:",
            "blob:",
            "dl.airtable.com",
            "strapi.io",
            "s3.amazonaws.com",
            "cdn.jsdelivr.net",
            "https://strapi-ylzu3.ondigitalocean.app",
            "https://cloud.digitalocean.com",
            "https://cloud.digitalocean.com/apps"
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
    },
  },
  {
    name: "strapi::poweredBy",
  },
  {
    name: "strapi::logger",
  },
  {
    name: "strapi::query",
  },
  {
    name: "strapi::body",
  },
  {
    name: "strapi::session",
  },
  {
    name: "strapi::favicon",
  },
  {
    name: "strapi::public",
  },
];
