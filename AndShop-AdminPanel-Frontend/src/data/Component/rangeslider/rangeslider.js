import React from 'react'
import Box from '@mui/material/Box';
import Slider,{ SliderThumb }  from '@mui/material/Slider';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';


//DiscreteSliderMarks
const marks = [
    {
      value: 0,
      label: '0',
    },
    
    {
      value: 100,
      label: '100',
    },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }
  
  export function DiscreteSliderMarks() {
    return (
      <Box md={{ width: 100 }}>
        <Slider
          defaultValue={50}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="on"
          marks={marks}
        />
      </Box>
    );
  }
//RangeSlider3
function valuetext2(value) {
    return `${value}`;
  }
  
export  function RangeSlider3() {
    const [value, setValue] = React.useState([20, 74]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box md={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext2}
        />
      </Box>
    );
  }
//RangeSlider4
  export  function RangeSlider4() {
    const [value, setValue] = React.useState([10, 94]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box md={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext2}
          color="secondary"
        />
      </Box>
    );
  }

//Rangeslider2
  const marksrv = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextrv(value) {
    return `${value}°C`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  
  export  function Rangeslider2() {
    return (
      
      <Box md={{ width: 100 }}>

        <Slider
          aria-label="Restricted values"
          defaultValue={20}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetextrv}
          step={null}
          valueLabelDisplay="auto"
          marks={marksrv}
        />
      </Box>
    );
  }


//CustomizedSlider
  function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
  
  const marks12 = [
    {
      value: 0,
    },
    {
      value: 20,
    },
    {
      value: 37,
    },
    {
      value: 100,
    },
  ];
  
  const IOSSlider = styled(Slider)(({ theme }) => ({
    
    height: 2,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      '&:focus, &:hover, &.Mui-active': {
        boxShadow:
          '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&:before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    },
  }));
  

  
  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };
  
  export  function CustomizedSlider() {
    return (
      <Box md={{ width: 100 }}>
        <IOSSlider
          aria-label="ios slider"
          defaultValue={60}
          marks={marks12}
          valueLabelDisplay="on"
        />
      </Box>
    );
  }

  //CustomizedSlider1
  function ValueLabelComponent1(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  ValueLabelComponent1.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  const PrettoSlider = styled(Slider)({
       color: '#52af77',
       height: 8,
       '& .MuiSlider-track': {
         border: 'none',
       },
       '& .MuiSlider-thumb': {
         height: 24,
         width: 24,
       backgroundColor: '#fff',
         border: '2px solid currentColor',
         '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
           boxShadow: 'inherit',
         },
        '&:before': {
     display: 'none',
       },
     },
      '& .MuiSlider-valueLabel': {
       lineHeight: 1.2,
       fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
         borderRadius: '50% 50% 50% 0',
         backgroundColor: '#52af77',
         transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
          transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
       },
        '& > *': {
           transform: 'rotate(45deg)',
        },
      },
     });
  function AirbnbThumbComponent1(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent1.propTypes = {
    children: PropTypes.node,
  };
  
  export  function CustomizedSlider1() {
    return (
      <Box md={{ width: 100 }}>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
        />

      </Box>
    );
  }

//CustomizedSlider2
  function ValueLabelComponent2(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent2.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function AirbnbThumbComponent2(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent2.propTypes = {
    children: PropTypes.node,
  };
  
  export function CustomizedSlider2() {
    return (
      <Box md={{ width: 100 }}>
        <Slider
          valueLabelDisplay="auto"
          components={{
            ValueLabel: ValueLabelComponent2,
          }}
          aria-label="custom thumb label"
          defaultValue={40}
        />
       
      </Box>
    );
  }

  //CustomizedSlider4
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));
  
  function AirbnbThumbComponent3(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent3.propTypes = {
    children: PropTypes.node,
  };
  
  export function CustomizedSlider4() {
    return (
      <Box md={{ width: 100 }}>
        <AirbnbSlider
          components={{ Thumb: AirbnbThumbComponent }}
          getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
          defaultValue={[30, 65]}
        />
      </Box>
    );
  }
//TrackFalseSlider
  const marksrt = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextrt(value) {
    return `${value}°C`;
  }
  
  export function TrackFalseSlider() {
    return (
      <Box md={{ width: 100 }}>
        
        <Slider
          track={false}
          aria-labelledby="track-false-slider"
          getAriaValueText={valuetextrt}
          defaultValue={30}
          marks={marksrt}
        />
      </Box>
    );
  }
//TrackFalseSlider1
  const marksrt1 = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextrt1(value) {
    return `${value}°C`;
  }
  
  export  function TrackFalseSlider1() {
    return (
      <Box md={{ width: 100 }}>
        <Slider
          track={false}
          aria-labelledby="track-false-range-slider"
          getAriaValueText={valuetextrt1}
          defaultValue={[20, 37, 50]}
          marks={marksrt1}
        />
      </Box>
    );
  }

//TrackInvertedSlider
  const marksin = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextin(value) {
    return `${value}°C`;
  }
  
  export  function TrackInvertedSlider() {
    return (
      <Box md={{ width: 100 }}>
        
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-slider"
          getAriaValueText={valuetextin}
          defaultValue={30}
          marks={marksin}
        />
      </Box>
    );
  }
//TrackInvertedSlider1
  const marksin1 = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextin1(value) {
    return `${value}°C`;
  }
  
  export function TrackInvertedSlider1() {
    return (
      <Box md={{ width: 100 }}>
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          getAriaValueText={valuetextin1}
          defaultValue={[20, 37]}
          marks={marksin1}
        />
      </Box>
    );
  }
  function valuetextvr(value) {
    return `${value}°C`;
  }
  
  
  export  function VerticalSlider() {
    return (
      <Stack sx={{ height: 400 }} spacing={1} direction="row">
        <Slider
          aria-label="Temperature"
          orientation="vertical"
          getAriaValueText={valuetextvr}
          defaultValue={30}
        />
        
      </Stack>
    );
  }
//VerticalSlider1
  export  function VerticalSlider1() {
    return (
      <Stack sx={{ height: 400 }} spacing={1} direction="row">
       
        <Slider
          aria-label="Temperature"
          orientation="vertical"
          defaultValue={30}
          disabled
        />
      
      </Stack>
    );
  }
//VerticalSlider2
  function valuetextvra(value) {
    return `${value}°C`;
  }
  const marksvra = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  export  function VerticalSlider2() {
    return (
      <Stack sx={{ height: 400 }} spacing={1} direction="row">
        
        <Slider
          getAriaLabel={() => 'Temperature'}
          orientation="vertical"
          getAriaValueText={valuetextvra}
          defaultValue={[20, 37]}
          marks={marksvra}
        />
      </Stack>
    );
  } 
//VerticalSlider4
  function valuetextv(value) {
    return `${value}°C`;
  }
  const marksv = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  export  function VerticalSlider4() {
    return (
      <Stack sx={{ height: 400 }} spacing={1} direction="row">
  <Slider
  track={false}
  orientation="vertical"
  aria-labelledby="track-false-slider"
  getAriaValueText={valuetextv}
  defaultValue={30}
  marks={marksv}
/> </Stack>
    );
  } 