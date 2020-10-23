import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Stars({ getStars }) {
  const [countStars, setCountStars] = React.useState(5);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Filtra por puntaje: </Typography>
        <Rating
          name="simple-controlled"
          value={countStars}
          onChange={(event, newValue) => {
            setCountStars(newValue);
            getStars(newValue);
          }}
        />
      </Box>
    </div>
  );
}
