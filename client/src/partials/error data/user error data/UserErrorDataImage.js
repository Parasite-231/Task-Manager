import ErrorImage from "../../../assets/images/error.gif";
import classes from "./UserTasksLoadingImage";

export default function UserErrorDataImage() {
  return (
    <div className={classes.imagePosition}>
      <img src={ErrorImage} alt="errorImage" />
    </div>
  );
}
