import { Box, Container } from "@mui/material"

interface IconBorderProps {
    children: React.ReactNode
    borderColor?: string
    borderSize?: string | number
}

export const IconBorder = ({ children, borderColor, borderSize }: IconBorderProps) => {
    return <Box sx={{
        borderRadius: '100%', backgroundColor: borderColor ?? '#DE9E28', display: 'flex', p: borderSize ?? 1,
        justifyContent: 'center', alignItems: "center"
    }}>
        {children}
    </Box>
}
