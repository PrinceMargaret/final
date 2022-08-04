import React from 'react'
import './VolumeControl.css'
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';


export default function VolumeControl() {
    const Widget = styled('div')(({ theme }) => ({
        padding: 16,
        borderRadius: 16,
        width: 343,
        maxWidth: '60%',
        margin: 'auto',
        position: 'relative',
        zIndex: 1,
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(40px)',
      }));

    const TinyText = styled(Typography)({
        fontSize: '0.75rem',
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
      });

      const theme = useTheme();

    const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  
  return (
    <div className='VolumeControl'>
      <div className="soundVol">
        <Widget>
        <Stack spacing={0} direction="row"  alignItems="center" float='right'>
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 18,
                height: 18,
                backgroundColor: '#fff',
                '&:before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
        </Widget>
    </div>
    </div>
  )
}
