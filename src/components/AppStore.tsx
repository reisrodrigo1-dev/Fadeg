import { FC } from "react";
import { Box } from "@mui/material";
import { FlexBox } from "./flex-box";
import PlayStore from "./icons/PlayStore";
import AppleStore from "./icons/AppleStore";

const AppStore: FC = () => {
  // data
  const appList = [
    {
      icon: PlayStore,
      title: "Google Play",
      subtitle: "Disponível no",
      url: "https://play.google.com/store/apps/details?id=com.samba.meucurso&pcampaignid=web_share",
    },
    {
      icon: AppleStore,
      title: "App Store",
      subtitle: "Disponível na",
      url: "https://apps.apple.com/br/app/meu-curso/id1472627975",
    },
  ];

  return (
    <FlexBox
      justifyContent={{ xs: "center", lg: "start" }}
      flexWrap="wrap"
      m={-1}
    >
      {appList.map((item) => (
        <a
          href={item.url}
          key={item.title}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Box
            m={1}
            gap={1}
            p="10px 16px"
            color="white"
            display="flex"
            bgcolor="#161d2b"
            borderRadius="5px"
            alignItems="center"
          >
            <item.icon />

            <Box>
              <Box fontSize="8px" fontWeight="600" lineHeight="1">
                {item.subtitle}
              </Box>

              <Box fontSize="14px" fontWeight="700">
                {item.title}
              </Box>
            </Box>
          </Box>
        </a>
      ))}
    </FlexBox>
  );
};

export default AppStore;
