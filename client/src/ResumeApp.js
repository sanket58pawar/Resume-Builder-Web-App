import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./ResumeApp.css";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

import { makeStyles } from "@material-ui/core/styles";
import ResumeAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function ResumeApp() {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callResumeAppPage = async () => {
    try {
      const res = await fetch("/resumeapp", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callResumeAppPage();
  }, []);

  const classes = useStyles();
  return (
    <div className="ResumeApp">
      <ResumeAppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Resume Form
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </ResumeAppBar>
      <Resume />
    </div>
  );
}

export default ResumeApp;
