import React, { useState } from "react";
import HomesItem from "./HomesItem";

function HomesList({ homes }) {
  const [homesList, setHomesList] = useState(homes);

  function handleUpdateHome(updatedHome) {
    const updatedHomesArr = homesList.map((home) => {
      if (home.id === updatedHome.id) {
        return updatedHome;
      }
      return home;
    });
    setHomesList(updatedHomesArr);
  }

  // add this callback function to delete homes
  function handleDeleteHome(deletedHome) {
    const updatedHomesArr = homesList.filter(
      (home) => home.id !== deletedHome.id
    );
    setHomesList(updatedHomesArr);
  }
  return (
    <div className="homes-container">
      {homes.map((home) => (
        <HomesItem
          key={home.id}
          home={home}
          onUpdateHome={handleUpdateHome}
          onDeleteHome={handleDeleteHome}
        />
      ))}
    </div>
  );
}

export default HomesList;

// // // add this callback function to update homes
// // function handleUpdateHome(updatedHome) {
// //   const updatedHomesArr = homes.map((home) => {
// //     if (home.id === updatedHome.id) {
// //       return updatedHome;
// //     } else {
// //       return home;
// //     }
// //   });

// //   setHomes(updatedHomesArr);
// // }