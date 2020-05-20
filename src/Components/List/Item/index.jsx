import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    display: "flex",
    color: "black",
    textDecoration: "none",
  },
  item: {
    display: "grid",
    gridTemplateColumns: "9fr 1fr",
  },
}));
export default function Item({ data }) {
  const classes = useStyles();

  return (
    <div>
      {data.map((user) => (
        <List key={user.id} page={user.page}>
          <ListItem className={classes.item}>
            <Link to={`/${user.login}`} className={classes.icon}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={user.avatar_url} />
              </ListItemAvatar>
              <ListItemText primary={user.login} />
            </Link>
            <a href={user.html_url} target="_blank">
              <Button variant="outlined" color="primary">
                Button
              </Button>
            </a>
          </ListItem>
        </List>
      ))}
    </div>
  );
}
