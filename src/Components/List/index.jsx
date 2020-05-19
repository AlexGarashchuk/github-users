import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BasicPagination from "../Pagination/index.jsx";
import axios from "axios";
import Pagination from "./../Pagination";
import Item from "./Item/index.jsx";

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

export default function UsersList({ data }) {

  const classes = useStyles();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   debugger
  //   const fetchData = async () => {
  //     debugger;
  //     const result = await axios(`https://api.github.com/users`, );
  //     setData(result.data)
  //   }
  //   fetchData()
  // }, [])
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  const paginate = (pageNmber) => setCurrentPage(pageNmber)
 
  // get currentList
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
         <Item data={currentUsers} />
          </div>
        </Grid>
      </Grid>
      <Pagination userPerPage={userPerPage} totalUsers={data.length} paginate={paginate} currentPage={currentPage}/>
    </div>
  );
}