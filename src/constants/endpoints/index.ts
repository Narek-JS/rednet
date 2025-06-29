/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
enum ENDPOINTS_ENUM {
  STATE = "/state",
  AUTH_LOGIN = "/auth/login",
  AUTH_REGISTER = "/auth/register",
  AUTH_VERIFY = "/auth/verify",
  AUTH_SEND_RESET = "/auth/password-reset",
  AUTH_CHECK_RESET = "/auth/password-reset/check",
  AUTH_SET_NEW_PASSWORD = "/auth/password-reset/set-new-password",
  AUTH_ACTIVATION_RESEND = "/auth/register/resend-activation-code",
  ORGANIZATION_INDIVIDUAL = "/organization-type/make-individual",
  ORGANIZATION_LEGAL = "/organization-type/make-legal-entity",

  // Lookup
  CATEGORIES = "/categories",
  INDUSTRIES = "/industries",
  MEASUREMENT_UNITS = "/measurement-units",

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

  // Tenders
  PROFILE_TENDERS = "/profiles/:profileId/tenders",
  CREATE_TENDER = "/profiles/:profileId/tenders",
  CREATE_TENDER_LOT = "/tenders/:tenderId/lots",
  PUBLISH_TENDER = "/tenders/:tenderId/publish",
  TENDER_BY_ID = "/tenders/:tenderId",
  TENDER_LOTS_BY_TENDER_ID = "/tenders/:tenderId/lots",

  // Files
  COVER_PHOTO = "/file-signature/cover-photo",
  PROFILE_PHOTO = "/file-signature/profile-photo",
  SERVICE_PHOTO = "/file-signature/service-photo",
  PRODUCT_PHOTO = "/file-signature/product-photo",
  TENDER_LOT_PHOTO = "/file-signature/auction-lots/file",
}

export { ENDPOINTS_ENUM };
