import classes from "../../styles/user modules/UserDataLoader.module.css";
import UserDataLoadingText from "./UserDataLoadingText";
export default function UserDataLoading() {
  return (
    <>
      <div className={classes.pencil}>
        <div className={classes.pencil__ball_point}></div>
        <div className={classes.pencil__cap}></div>
        <div className={classes.pencil__cap_base}></div>
        <div className={classes.pencil__middle}></div>
        <div className={classes.pencil__eraser}></div>
      </div>
      <div className={classes.line}></div>
      <UserDataLoadingText />
    </>
  );
}
