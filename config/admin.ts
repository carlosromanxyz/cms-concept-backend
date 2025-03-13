// Draft preview configuration handler
const getPreviewPathname = (uid, { locale, document }): string => {
  const { slug } = document;

  switch (uid) {
    case "api::header.header":
      return "/";
    case "api::homepage.homepage":
      return "/";
    case "api::landing.landing":
      return `/landing/${slug}`;
    default:
      return null;
  }
};

// Strapi admin configuration
export default ({ env }) => {
  const clientUrl = env("NEXTJS_APPLICATION_URL");

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
        async handler(uid, { documentId, locale, status }) {
          const document = await strapi.documents(uid).findOne({ documentId });
          const pathname = getPreviewPathname(uid, { locale, document });

          // Check if the pathname is valid
          if (!pathname) {
            return null;
          }

          const urlSearchParams = new URLSearchParams({
            url: pathname,
            status
          });
          
          // This is to be used in the preview iframe on the Strapi admin
          return `${clientUrl}/api/draft?${urlSearchParams}`;
        },
      },
    },
  };
};
