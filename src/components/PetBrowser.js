import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petCards = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>
  ))
  return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
}

export default PetBrowser;