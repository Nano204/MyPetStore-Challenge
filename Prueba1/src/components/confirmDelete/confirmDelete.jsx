import style from "./confirmDelete.module.css";
import { HOST, APIKEY } from "../../App";

export default function ConfirmDelete(props) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.toogleVisibility("deleteForm");
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`${HOST}/${APIKEY}/pets/${props.petId}`, requestOptions).then(
      () => props.updatePets(),
      () => props.updatePets()
    );
  };
  return (
    <form
      className={style.deleteForm}
      style={{ visibility: props.visibility }}
      onSubmit={handleOnSubmit}
    >
      <div className="mb-3">
        <label htmlFor="petName" className="form-label">
          Are you sure you want to delete this pet?
        </label>
      </div>
      <div className={style.deleteDiv}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </div>
    </form>
  );
}
