import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import PropTypes from "prop-types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ReactRating from "react-rating";
import ReactStars from "react-rating-stars-component";
//CustomizedRating
export function CustomizedRating() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="customized-5" className="Rating" defaultValue={3} max={5} />
    </Box>
  );
}
//CustomizedRating1
export function CustomizedRating1() {
  const [value] = React.useState(4);
  return (
    <Box
      sx={{
        "& > legend": { mt: 4 },
      }}
    >
      <Rating name="read-only" className="Rating" value={value} readOnly />
    </Box>
  );
}
//CustomizedRating2
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});
export function CustomizedRating2() {
  const [value] = React.useState(4);
  return (
    <Box
      sx={{
        "& > legend": { mt: 4 },
      }}
    >
      <StyledRating
        name="customized-color"
        className="Rating"
        defaultValue={value}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}
//CustomizedRating4
export function CustomizedRating4() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 1 },
      }}
    >
      <Rating name="customized-10" className="Rating" defaultValue={1} max={10} />
    </Box>
  );
}
//CustomizedRating5
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export function CustomizedRating5() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        className="Rating"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}


//CustomizedRating6
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export function CustomizedRating6() {
  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      className="Rating"
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
  );
}
//CustomizedRating7
export function CustomizedRating7() {
  return <ReactRating initialRating={2} className="Rating" onChange={(e) => console.log(e)} />;
}
//CustomizedRating8
export function CustomizedRating8() {
  const ColorExample = {
    size: 40,
    count: 7,
    isHalf: false,
    value: 4,
    color: "#6c757d",
    activeColor: "#ffc107",
    onChange: (newValue) => {
      console.log(`Example 3: new value is ${newValue}`);
    },
  };
  return <ReactStars {...ColorExample} className="Rating"/>;
}
//CustomizedRating9
export function CustomizedRating9() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }}className="Rating" fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
