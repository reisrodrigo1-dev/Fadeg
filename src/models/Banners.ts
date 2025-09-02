interface Banner {
  BannerId: number;
  Order: number;
  Description?: string;
  Name?: string;
  URL?: string;
  BannerLargeURL?: string;
  BannerSmallURL?: string;
  BannerCategoryId: number;
  AltBannerLarge: string;
  AltBannerSmall: string;
}

export default Banner;
