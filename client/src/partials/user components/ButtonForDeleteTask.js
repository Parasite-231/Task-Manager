import DeleteButtonImage from "../../assets/images/delete.png";
import classes from "../../styles/user modules/button.module.css";
export default function ButtonForDeleteTask({ updateTaskFunction, taskId }) {
  return (
    <td className="align-middle">
      <button
        className={classes.button}
        onClick={() => {
          updateTaskFunction(taskId);
        }}
      >
        <img src={DeleteButtonImage} alt="deleteButton" />
      </button>
    </td>
  );
}
