import classes from "./BaseLayout.module.css";

const BaseLayout = ({ children }) => {
  const [AppBar, ComponentPage] = children;
  return (
    <div className={classes.container}>
      <div className={classes.appbar}>{AppBar}</div>
      <div className={classes.content}>{ComponentPage}</div>
    </div>
  );
};
export default BaseLayout;
