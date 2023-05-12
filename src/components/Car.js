import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";

import { Container, Paper, Chip } from "@mui/material";

export default function Car(props) {
  const { id } = useParams();
  const car = cars.find((car) => car.id.toString() === id);

  return car ? (
    <Container>
      <Paper>
        <h2 style={{ textTransform: 'capitalize' }}>{car.Name}</h2>
        <div className="Box">
          <Chip label={`ID: ${car.id}`} />
          <Chip label={`Acceleration: ${car.Acceleration}`} />
          <Chip label={`Cylinders: ${car.Cylinders}`} />
          <Chip label={`Displacement: ${car.Displacement}`} />
          <Chip label={`Horsepower: ${car.Horsepower}`} />
          <Chip label={`Miles Per Gallon: ${car.Miles_per_Gallon}`} />
          <Chip label={`Origin: ${car.Origin}`} />
          <Chip label={`Weight (lbs): ${car.Weight_in_lbs.toLocaleString()}`} />
          <Chip label={`Date released: ${new Date(car.Year).toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}`} />
        </div>
      </Paper>
    </Container>
  ) : (
    console.log(car)
  );
}
