import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Pagination from "./../Pagination";
import Item from "./Item/index.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    display: "grid",
    gridTemplateColumns: "9fr 1fr",
  },
}));

export default function UsersList({ data }) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  const paginate = (pageNmber) => {
    setCurrentPage(pageNmber);
  };
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <Item data={currentUsers} />
          </div>
        </Grid>
      </Grid>
      <Pagination
        userPerPage={userPerPage}
        totalUsers={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
