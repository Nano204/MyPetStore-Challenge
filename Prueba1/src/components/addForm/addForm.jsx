import { useState } from "react";

import pet from "../../entities/index.ts";
import style from "./addForm.module.css";
import { HOST, APIKEY } from "../../App";

export default function AddForm(props) {
  const [newPet, setNewPet] = useState(new pet());

  const handleOnchage = (event) => {
    setNewPet({
      ...newPet,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.toogleVisibility("addForm");
    if (props.formMethod === "POST") {
      const name = newPet.name || "Pending name";
      const age = newPet.age || "Pending age";
      const specie = newPet.specie || "Pending specie";
      const description = newPet.description || "No description aviable";
      let petRequest = {
        name,
        age,
        specie,
        description,
      };
      const requestOptions = {
        method: props.formMethod,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petRequest),
      };
      fetch(`${HOST}/${APIKEY}/pets`, requestOptions)
        .then((response) => response.json())
        .then(() => {
          setNewPet(new pet());
          event.target.reset();
          props.updatePets();
        });
    }

    if (props.formMethod === "PUT") {
      const name = newPet.name || props.selectedPet.name;
      const age = newPet.age || props.selectedPet.age;
      const specie = newPet.specie || props.selectedPet.specie;
      const description = newPet.description || props.selectedPet.description;
      let petRequest = {
        name,
        age,
        specie,
        description,
      };
      const requestOptions = {
        method: props.formMethod,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petRequest),
      };
      fetch(`${HOST}/${APIKEY}/pets/${props.petId}`, requestOptions)
        .then((response) => response.json())
        .then(
          () => {
            setNewPet(new pet());
            event.target.reset();
            props.updatePets();
          },
          () => {
            setNewPet(new pet());
            event.target.reset();
            props.updatePets();
          }
        );
    }
  };

  return (
    <form
      className={style.addForm}
      style={{ visibility: props.visibility }}
      onSubmit={handleOnSubmit}
    >
      <div className="mb-3">
        <label htmlFor="petName" className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Name your pet..."
          onChange={handleOnchage}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="petAge" className="form-label">
          Age
        </label>
        <input
          name="age"
          type="text"
          className="form-control"
          placeholder="Input your pet age..."
          onChange={handleOnchage}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="petSpecie" className="form-label">
          Specie
        </label>
        <input
          name="specie"
          type="text"
          className="form-control"
          placeholder="Input your pet specie..."
          onChange={handleOnchage}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="petPicture" className="form-label">
          Picture
        </label>
        <input className="form-control" type="file" id="petPicture" />
      </div>
      <div className="mb-3">
        <label htmlFor="petDescription" className="form-label">
          Description
        </label>
        <textarea
          name="description"
          className="form-control"
          id="petDescription"
          rows="3"
          onChange={handleOnchage}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
