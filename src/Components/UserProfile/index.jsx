import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Profile({ login }) {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.github.com/users/${login}`);
      setUserData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Link to="/">Go to back</Link>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={userData.avatar_url}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {userData.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {userData.company !== null || undefined
                    ? userData.company + ","
                    : ""}
                  {userData.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  From: {userData.created_at}
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
