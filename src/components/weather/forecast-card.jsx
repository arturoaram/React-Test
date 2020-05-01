import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    display: 'inline-block'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const getDate = dateSeconds => {
  let date = new Date(0);
  date.setUTCSeconds(dateSeconds);
  return date;
};

export default function ForcastCard(props) {
  const { dt, main, weather, clouds, wind, dt_txt } = props.value;
  const classes = useStyles(),
    date = getDate(dt);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          {date.toDateString().slice(0, 3)}
        </Typography>
        <Typography variant="body2" component="p">
          {date.toLocaleTimeString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
