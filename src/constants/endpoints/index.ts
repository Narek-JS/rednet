enum ENDPOINTS_ENUM {
  STATE = "/state",
  AUTH_LOGIN = "/auth/login",
  AUTH_REGISTER = "/auth/register",
  AUTH_VERIFY = "/auth/verify",
  AUTH_SEND_RESET = "/auth/password-reset",
  AUTH_CHECK_RESET = "/auth/password-reset/check",
  AUTH_SET_NEW_PASSWORD = "/auth/password-reset/set-new-password",
  AUTH_ACTIVATION_RESEND = "/auth/register/resend-activation-code",
  CATEGORIES = "/categories",
  INDUSTRIES = "/industries",
  MEASUREMENT_UNITS = "/measurement-units",
  ORGANIZATION_INDIVIDUAL = "/organization-type/make-individual",
  ORGANIZATION_LEGAL = "/organization-type/make-legal-entity",

  // Profile
  PROFILE_BY_ID = "/profiles",
  PROFILE_BY_SLUG = "/profiles/by-slug",
  PROFILE_AUCTIONS = "/profiles/:profileId/auctions",
  PROFILE_PRODUCTS = "/profiles/:profileId/products",
  PROFILE_PRODUCT = "/profiles/:profileId/products/:productId",
  PROFILE_SERVICES = "/profiles/:profileId/services",
  PROFILE_SERVICE = "/profiles/:profileId/services/:serviceId",
  UPDATE_PROFILE = "/profiles/:profileId",

  UPDATE_SERVICE = "/services/:serviceId",
  UPDATE_PRODUCT = "/products/:productId",

  // Files
  PROFILE_PHOTO = "/file-signature/profile-photo",
  COVER_PHOTO = "/file-signature/cover-photo",
  SERVICE_PHOTO = "/file-signature/service-photo",
  PRODUCT_PHOTO = "/file-signature/product-photo",
}

export { ENDPOINTS_ENUM };
