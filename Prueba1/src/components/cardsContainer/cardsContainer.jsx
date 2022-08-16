import AddCard from "../addCard/addCard";
import PetCard from "../petCard/petCard";
import style from "./cardsContainer.module.css";

export default function CardsContainer(props) {

  return (
    <div className={style.cardsContainer}>
      {props.petArray && props.petArray.map((pet) => {
        return (
          <PetCard
            key={pet._id}
            pet={pet}
            selectedPet={props.selectedPet}
            setSelectedPet={props.setSelectedPet}
            setPetId={props.setPetId}
            useMethod={props.useMethod}
            toogleVisibility={props.toogleVisibility}
          />
        );
      })}
      <AddCard
        useMethod={props.useMethod}
        toogleVisibility={props.toogleVisibility}
      />
    </div>
  );
}
