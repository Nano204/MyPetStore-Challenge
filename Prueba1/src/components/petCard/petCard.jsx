import style from "./petCard.module.css";

export default function PetCard(props) {
  return (
    <div className={`card ${style.card}`} style={{ width: "18rem" }}>
      <img
        src={
          props.pet.image ||
          "https://img.freepik.com/premium-vector/minimal-thin-line-pet-icon-set_54454-25.jpg"
        }
        className={`card-img-top ${style.cardImage}`}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.pet.name}</h5>
        <p className={`card-text ${style.itemText}`}>
          <strong>Age:</strong> {props.pet.age}
        </p>
        <p className={`card-text ${style.itemText}`}>
          <strong>Specie:</strong> {props.pet.specie}
        </p>
        <p className={`card-text ${style.itemText}`}>
          <strong>Description:</strong>
        </p>
        <p className={`card-text ${style.descriptionText}`}>
          {props.pet.description}
        </p>
        <div className={style.buttonsDiv}>
          <button
            className="btn btn-primary"
            onClick={() => {
              props.setSelectedPet(props.pet);
              props.setPetId(props.pet._id);
              props.useMethod("PUT");
              props.toogleVisibility("addForm");
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.setPetId(props.pet._id);
              props.toogleVisibility("deleteForm");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
