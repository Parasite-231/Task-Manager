import UpdateButtonImage from "../../assets/images/editTask.png";
import classes from "../../styles/user modules/button.module.css";
export default function ButtonForDeleteTask() {
  return (
    <td className="align-middle">
      <button className={classes.button}>
        <img src={UpdateButtonImage} alt="deleteButton" />
      </button>
    </td>
  );
}
