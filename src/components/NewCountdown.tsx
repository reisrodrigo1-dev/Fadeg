import { Box, SxProps } from "@mui/material";
import { useTimer } from "react-timer-hook";
import { H3 } from "./Typography";
import { Timer } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface NewCountdownProps {
    expirationDate: Date
    expireMessage?: string
    componentColor?: string
    callBackToExpire?: () => void
}


const NewCountdown = ({ callBackToExpire, expirationDate, componentColor = 'black', expireMessage = 'Oferta expirada!' }: NewCountdownProps) => {
    const [time, setTime] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    })
    const { days, minutes, hours, seconds, isRunning } = useTimer({
        expiryTimestamp: expirationDate,
        onExpire: callBackToExpire
    })

    useEffect(() => {
        setTime({
            days: days.toString().padStart(2, '0') === '00'
                ? ''
                : `${days.toString().padStart(2, '0')} Dias`,

            hours: hours.toString().padStart(2, '0') === '00'
                ? ''
                : `${hours.toString().padStart(2, '0')} Horas`,

            minutes: minutes.toString().padStart(2, '0') === '00'
                ? ''
                : `${minutes.toString().padStart(2, '0')} Minutos`,

            seconds: `${seconds.toString().padStart(2, '0')} Segundos`
        })

    }, [days, minutes, hours, seconds])


    return (
        <Box sx={{
            backgroundColor: componentColor
        }} display={'flex'} gap={2} px={3} p={1} justifyContent='center'>
            {isRunning && <Timer sx={{ color: 'white' }} fontSize="large" />}
            <H3 fontSize={{ xs: 16, md: 24 }} color={'white'} width={'640px'} textAlign={'center'}>
                {isRunning && `Descontos liberados! Faltam`}
                <br/>
                {isRunning && `${time.days} ${time.hours} ${time.minutes} ${time.seconds}` }
                <br/>
                {isRunning && 'para encerrar a oferta!'}
                {!isRunning && expireMessage}
            </H3>
        </Box>
    )
};

export default NewCountdown;