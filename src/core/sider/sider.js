import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { routes } from "../router/route";

const Sider = (props) => {
  const [select, setSelect] = useState(
    `/${window.location.href.split("/")[3]}`
  );
  return (
    <MenuList>
      {routes.map((route) => (
        <MenuItem
          component={Link}
          to={route.path}
          key={route.path}
          selected={route.path === select}
          onClick={() => {
            setSelect(route.path);
          }}
        >
          <ListItemText primary={route.name} />
        </MenuItem>
      ))}
    </MenuList>
  );
};

Sider.propTypes = {};

export default Sider;
