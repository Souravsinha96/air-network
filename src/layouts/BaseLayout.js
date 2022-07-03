import classes from "./BaseLayout.module.scss";

const BaseLayout = ({ children }) => {
  const [AppBar, MenuBar, ComponentPage] = children;
  return (
    <div className={classes.container}>
      <div className={classes.appbar}>{AppBar}</div>
      <div className={classes.content}>
        <div>{MenuBar}</div>
        <div>{ComponentPage}</div>
      </div>
    </div>
  );
};
export default BaseLayout;
