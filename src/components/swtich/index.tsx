import * as React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

// Свитчер

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 30,
  padding: 0,
  marginRight: 25,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(2px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundSize: '18px',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="${encodeURIComponent(
          '#A9A9A9',
        )}" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#366EFF' : '#10C200',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#F4F4F4' : '#F4F4F4',
    width: 25,
    height: 27,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '18px',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="${encodeURIComponent(
        '#A9A9A9',
        )}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#366EFF' : '#366EFF',
    borderRadius: 20,
  },
}));

export const CustomizedSwitches: React.FC<{
    onChange?: any;
    checked?: any;
}> = ({onChange, checked}) => {
  
  return (
    <MaterialUISwitch
      checked={checked}
      onChange={onChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};
