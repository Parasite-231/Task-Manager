import LoadingImageForUserTasks from "../../../assets/images/loader.gif";
import classes from "./UserTasksLoadingImage";
export default function UserTasksLoadingImage() {
  return (
    <div className={classes.imagePosition}>
      <img src={LoadingImageForUserTasks} alt="loaderImage" />
    </div>
  );
}
