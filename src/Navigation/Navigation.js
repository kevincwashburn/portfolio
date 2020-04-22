import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Tabs,
  Tab,
  Grid,
  Link,
} from "@material-ui/core";
import Menu from "./Menu";

const logo = require("../images/logo.svg");

const styles = (theme) => ({
  tabContainer: {
    flexgrow: 1,
    alignItems: "center",
    // marginLeft: 32,
    // [theme.breakpoints.down("sm")]: {
    //   display: "inline",
    // },
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto",
  },

  tagline: {
    display: "inline-block",
    marginLeft: 10,
    // [theme.breakpoints.up("md")]: {
    //   paddingTop: "0.8em",
    // },
    color: "indigo",
  },
  flex: {
    display: "flex",
    // [theme.breakpoints.down("sm")]: {
    //   display: "flex",
    //   justifyContent: "space-evenly",
    //   alignItems: "center",
    // },
  },

  inline: {
    display: "inline",
    float: "left",
  },
  inline2: {
    display: "inline",
    float: "right",
    marginRight: 0,
  },

  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

class Navigation extends Component {
  state = {
    value: 0,
    menuDrawer: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  current = () => {
    if (this.props.currentPath === "/") {
      return 0;
    }
    if (this.props.currentPath === "/portfolio") {
      return 1;
    }
    if (this.props.currentPath === "/contact") {
      return 2;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.tabContainer}>
        <Grid container spacing={3}>
          <Grid item sx={12} className={classes.flex}>
            <div className={classes.inline}>
              <Typography variant="h5" color="inherit">
                <Link to="#" className={classes.link}>
                  {/* **placeholder for KW logo** */}
                  <img width={20} src={logo} alt="react" />
                </Link>
              </Typography>
            </div>
          </Grid>
          <Grid item sx={6}>
            <div>
              <Tabs
                value={this.current() || this.state.value}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
              >
                {Menu.tabs.map((item, index) => (
                  <Tab
                    key={index}
                    component={Link}
                    to={{ pathname: item.pathname }}
                    classes={{ root: classes.tabItem }}
                    label={item.label}
                  />
                ))}
              </Tabs>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
