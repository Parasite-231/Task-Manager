import DeleteButtonImage from "../../assets/images/delete.png";
import classes from "../../styles/user modules/button.module.css";
export default function ButtonForDeleteTask() {
  return (
    <td className="align-middle">
      <button className={classes.button}>
        <img src={DeleteButtonImage} alt="deleteButton" />
      </button>
    </td>
  );
}
