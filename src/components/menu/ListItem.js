import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import classes from "./Menu.module.scss";

const ListItem = ({ isActive, item }) => {
  return (
    <div className={classes.listItem}>
      <div className="flex">
        {isActive ? item.whiteIcon : item.icon}
        {item.name}
      </div>
      {isActive && <ChevronRightIcon />}
    </div>
  );
};
export default ListItem;
