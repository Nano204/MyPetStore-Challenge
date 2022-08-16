import style from "./addCard.module.css";

export default function AddCard(props) {
  return (
    <div
      className={`card ${style.card}`}
      style={{ height: "28rem", width: "18rem" }}
    >
      <div
        className={style.cardBody}
        onClick={() => {
          props.useMethod("POST");
          props.toogleVisibility("addForm");
        }}
      >
        <p className={style.addSymbol}>+</p>
        <p className={style.addText}>Add another pet</p>
      </div>
    </div>
  );
}
