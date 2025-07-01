export const SECTION_TAGS = {
  PROFILE_SERVICES: {
    ID: "profile-services",
    LINK: "/profile/:profileId/#profile-services",
    getProfileServiceTagUrl: function (profileId: string) {
      return this.LINK.replace(":profileId", profileId);
    },
  },
  PROFILE_PRODUCTS: {
    ID: "profile-products",
    LINK: "/profile/:profileId/#profile-products",
    getProfileProductsTagUrl: function (profileId: string) {
      return this.LINK.replace(":profileId", profileId);
    },
  },
};
