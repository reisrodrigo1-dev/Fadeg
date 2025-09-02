import { Box, Button } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface ReadMoreProps {
  children: string | any;
}

export function ReadMore({ children }: ReadMoreProps) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const maxLength = 350;
  const shouldShowButton = children.length > maxLength;

  const truncatedText = isReadMore
    ? children.slice(0, maxLength)
    : children;

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html:
            truncatedText + (isReadMore && shouldShowButton ? "..." : ""),
        }}
      />
      {shouldShowButton && (
        <Box sx={{ display: "grid", mx: "auto", pb: 3 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#e1e1e1e1", color: "#000000" }}
            onClick={toggleReadMore}
          >
            {isReadMore && (
              <>
                ver mais
                <ExpandMoreIcon />
              </>
            )}
            {!isReadMore && (
              <>
                ver menos
                <ExpandLessIcon />
              </>
            )}
          </Button>
        </Box>
      )}
    </>
  );
}
