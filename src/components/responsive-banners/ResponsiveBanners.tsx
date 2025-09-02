import { styled } from "@mui/material";
import BazaarImage from "components/BazaarImage";
import Image from "next/image";

type BannersData = {
  bannerData?: string | any;
  bannerDataMobile?: string;
};
const Images = styled(Image)({
  display: "block",
});

const ResponsiveBanners = ({
  bannerData,
  bannerDataMobile,
}: BannersData) => {
  return (
    <>
      {bannerData && (
        <Images
          priority
          width={1349}
          height={300}
          alt="banner"
          src={bannerData}
          sx={{
            width: "100%",
            height: "auto",
            display: { xs: "none", md: "block" },
          }}
        />
      )}
      {bannerDataMobile && (
        <Images
          priority
          width={1080}
          height={1080}
          alt="banner"
          src={bannerDataMobile}
          sx={{
            width: "100%",
            height: "auto",
            display: { xs: "block", md: "none" },
          }}
        />
      )}
    </>
  );
};

export default ResponsiveBanners;
