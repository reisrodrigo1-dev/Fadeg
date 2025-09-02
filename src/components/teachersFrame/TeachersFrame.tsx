import { Box, Typography } from "@mui/material";
import { Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface TeachersFrameProps {
    CoordinatorName?: string
    gradientColor?: string
    CourseCoordinatorUrl?: string
    coordinatorOverview?: string
}

const TeachersFrame = ({ CourseCoordinatorUrl, CoordinatorName, gradientColor, coordinatorOverview }: TeachersFrameProps) => {
    const width = useWindowSize()

    return (
        <Box sx={{
            width: { xs: '300px', md: "400px" },
            height: { xs: '300px', md: "400px" },
            display: "flex",
            alignItems: 'end',
            borderRadius: '10%',
            justifyContent: "center",
            background: gradientColor,
        }}>
            {CourseCoordinatorUrl && (
                <Image
                    width={width < 500 ? 300 : 400}
                    height={width < 500 ? 400 : 500}
                    alt={CoordinatorName}
                    src={CourseCoordinatorUrl}
                />
            )}
        </Box>
    );
};

export { TeachersFrame }