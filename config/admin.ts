// Draft preview configuration handler
const getPreviewPathname = (uid, { locale, document }): string => {
  const { slug } = document;

  switch (uid) {
    case "api::header.header":
      return "/"; // Header with /preview in draft mode
    case "api::homepage.homepage":
      return "/"; // Homepage with /preview in draft mode
    case "api::landing.landing":
      return `/landing/${slug}/preview`; // Landing pages with /preview
    default:
      return null;
  }
};

// Strapi admin configuration
export default ({ env }) => {
  const clientUrl = env("CLIENT_URL");

  return {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    apiToken: {
      salt: env("API_TOKEN_SALT"),
    },
    transfer: {
      token: {
        salt: env("TRANSFER_TOKEN_SALT"),
      },
    },
    flags: {
      nps: env.bool("FLAG_NPS", true),
      promoteEE: env.bool("FLAG_PROMOTE_EE", true),
    },
    preview: {
      enabled: true,
      config: {
        allowedOrigins: clientUrl,
        async handler(uid, { documentId, locale }) {
          const document = await strapi.documents(uid).findOne({ documentId });
          const pathname = getPreviewPathname(uid, { locale, document });
          const status = document?.status;

          // Check if the pathname is valid
          if (!pathname) {
            return null;
          }

          const urlSearchParams = new URLSearchParams({
            pathname,
            preview: "true",
          });
          
          return `${clientUrl}${urlSearchParams}`;
        },
      },
    },
  };
};
