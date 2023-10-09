import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  const petArray = pets.map((pet) => {
    return <Pet key = {pet.id}
    pet = {pet}
    onAdoptPet={onAdoptPet}
    />
  })
  return <div className="ui cards">{petArray}</div>;
}

export default PetBrowser;