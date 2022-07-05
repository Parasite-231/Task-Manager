import classes from "../../styles/admin modules/AdminDashboard.module.css";
export default function DashboardHighlightedCards({
  cardTitle,
  cardIcon,
  cardData,
}) {
  return (
    <div className={classes.card}>
      <div className={classes["card-body"]}>
        <h5 className={classes["card-title"]} style={{ marginTop: "20px" }}>
          {cardTitle}
          <img
            src={cardIcon}
            height="50px"
            width="50px"
            style={{ float: "right" }}
            className="card-img-left"
            alt="cardIcon"
          />
        </h5>

        <p className="card-text" style={{ fontSize: "30px" }}>
          &nbsp;{cardData}
        </p>
      </div>
    </div>
  );
}
