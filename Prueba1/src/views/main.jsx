import { useState, useEffect } from "react";

import AddForm from "../components/addForm/addForm";
import CardsContainer from "../components/cardsContainer/cardsContainer";
import ConfirmDelete from "../components/confirmDelete/confirmDelete";
import Header from "../components/header/header";
import style from "./main.module.css";
import { HOST, APIKEY } from "../App";

export default function Main() {
  const [petArray, setPetArray] = useState([]);

  const updatePets = () => {
    console.log("Something");
    fetch(`${HOST}/${APIKEY}/pets`)
      .then((response) => response.json())
      .then((response) =>
        response.length ? setPetArray(response) : setPetArray(null)
      );
  };

  useEffect(() => {
    console.log(petArray);
    if (!petArray || !petArray.length) {
      updatePets();
    }
  }, [petArray]);

  const [petId, setPetId] = useState("");
  const [selectedPet, setSelectedPet] = useState({});

  const intialVisibilityState = {
    addForm: "hidden",
    deleteForm: "hidden",
    bluring: "hidden",
  };

  const [objectVisibility, setObjectVisibility] = useState(
    intialVisibilityState
  );

  const [formMethod, setFormMethod] = useState("");

  const toogleVisibility = async (object) => {
    objectVisibility[object] === "hidden"
      ? setObjectVisibility({
          ...objectVisibility,
          [object]: "visible",
          bluring: "visible",
        })
      : setObjectVisibility({
          ...objectVisibility,
          [object]: "hidden",
          bluring: "hidden",
        });
  };

  return (
    <div>
      <div
        className={style.bluring}
        style={{ visibility: objectVisibility.bluring }}
        onClick={() => setObjectVisibility(intialVisibilityState)}
      ></div>
      <Header />
      <AddForm
        selectedPet={selectedPet}
        updatePets={updatePets}
        petId={petId}
        setPetId={setPetId}
        formMethod={formMethod}
        visibility={objectVisibility.addForm}
        toogleVisibility={toogleVisibility}
      />
      <ConfirmDelete
        updatePets={updatePets}
        petId={petId}
        visibility={objectVisibility.deleteForm}
        toogleVisibility={toogleVisibility}
      />
      <CardsContainer
        setSelectedPet={setSelectedPet}
        setPetId={setPetId}
        useMethod={setFormMethod}
        petArray={petArray}
        toogleVisibility={toogleVisibility}
      />
    </div>
  );
}
