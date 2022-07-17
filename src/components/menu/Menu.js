import { NavLink } from "react-router-dom";

import { MENU_OPTIONS } from "../../constants/menu-constants";
import ListItem from "./ListItem";
import amadeus_logo from "../../assets/images/amadeus_logo.png";

import classes from "./Menu.module.scss";

const MainMenu = () => {
  return (
    <div className={classes.container}>
      <div className="flex-col">
        {MENU_OPTIONS.map((item) => (
          <NavLink
            key={item.name}
            to={item.route}
            className={({ isActive }) =>
              isActive ? classes.activeContainer : classes.m_container
            }
          >
            {({ isActive }) => <ListItem isActive={isActive} item={item} />}
          </NavLink>
        ))}
      </div>
      <div className="flex-col-center">
        <span>powered by </span>
        <img src={amadeus_logo} alt="amadeus logo" width="200px" />
      </div>
    </div>
  );
};
export default MainMenu;
