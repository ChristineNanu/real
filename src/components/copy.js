// import React, { useState, useEffect } from "react";

// import HomesList from "./HomesList.js";
// import "./style.css";
// import NavBar from "./NavBar.js";
// import Header from "./Header.js";

// function App() {
//   const [homes, setHomes] = useState([]);
//   const [category, setCategory] = useState("all");
//   //const [filteredHomes, setFilteredHomes] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4300/homes")
//       .then((resp) => resp.json())
//       .then((homes) => {
//         setHomes(homes);
//       });
//   }, []);

//   const onCategoryClick = (category) => {
//     setCategory(category);
//   };

//   function handleSearch(filteredHomes) {
//     setHomes(filteredHomes);
//   }

//   const filteredHomes =
//     category === "all"
//       ? homes
//       : homes.filter((home) => home.category === category);

//   return (
//     <div>
//       <Header />
//       <NavBar
//         onCategoryClick={onCategoryClick}
//         homes={homes}
//         onSearch={handleSearch}
//       />
//       <HomesList homes={filteredHomes} />
//     </div>
//   );
// }

// export default App;

// ////////////////////////////////////////////////////////////////

// import React from "react";
// import HomesItem from "./HomesItem";

// function HomesList({ homes }) {
//   return (
//     <div className="homes-container">
//       {homes.map((home) => (
//         <HomesItem key={home.id} home={home} />
//       ))}
//     </div>
//   );
// }

// export default HomesList;

// /////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

// function HomesItem({ home }) {
//   const [loveCount, setLoveCount] = useState(0);
//   const [isLoved, setIsLoved] = useState(false);
//   const [comment, setComment] = useState("");

//   function handleLoveClick() {
//     if (isLoved) {
//       setLoveCount(loveCount - 1);
//     } else {
//       setLoveCount(loveCount + 1);
//     }
//     setIsLoved(!isLoved);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const comment = formData.get("comment");
//     setComment(comment); // Store the comment in state
//   };
//   return (
//     <div className="homes-item">
//       <div className="homes-item-images">
//         {home.images
//           ? home.images.map((image, index) => (
//               <img key={index} src={image} alt={` ${index + 1}`} />
//             ))
//           : null}
//       </div>
//       <h2>{home.title}</h2>
//       <p>Bedrooms: {home.bedrooms}</p>
//       <p>Bathrooms: {home.bathrooms}</p>
//       <p>Living Room: {home.livingroom ? "Yes" : "No"}</p>
//       {/* Render the comment if there is one */}
//       {comment && <p>{comment}</p>}
//       <div className="homes-item-actions">
//         <button
//           className={`love-button ${isLoved ? "loved" : ""}`}
//           onClick={handleLoveClick}
//         >
//           <FontAwesomeIcon icon={faHeart} />
//           <span className="love-count">{loveCount}</span>
//         </button>
//       </div>
//       {/* Form to submit a comment */}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Comment:
//           <input type="text" name="comment" />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default HomesItem;

// //////////////////////////////////////////////////////

// import React from "react";

// function NavBar({ onCategoryClick, homes, onSearch }) {
//   const handleCategoryClick = (category) => {
//     onCategoryClick(category);
//   };
//   function handleSearch(event) {
//     event.preventDefault();
//     const searchValue = event.target.search.value.toLowerCase();

//     // Filter homes based on search query
//     const filteredHomes = homes.filter((home) => {
//       const lowerCaseTitle = home.title.toLowerCase();
//       const lowerCaseLocation = home.location.toLowerCase();

//       return (
//         lowerCaseTitle.includes(searchValue) ||
//         lowerCaseLocation.includes(searchValue)
//       );
//     });

//     onSearch(filteredHomes);
//   }

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <button id="category" onClick={() => handleCategoryClick("sale")}>
//           For Sale
//         </button>
//         <button id="category" onClick={() => handleCategoryClick("rental")}>
//           For Rent
//         </button>
//       </div>
//       <form onSubmit={handleSearch} className="search-form">
//         <input type="text" name="search" placeholder="Search Homes" />
//         <button id="category" type="submit">
//           Search
//         </button>
//       </form>
//     </nav>
//   );
// }

// export default NavBar;

// ////////////////////////////////////////////////////////////

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   const websiteName = "Beautiful Homes";
//   const slogan = "Find Your Gem";
//   return (
//     <header className="header">
//       <div className="header-background">
//         <div className="logo">
//           <FontAwesomeIcon icon={faHome} size="2x" />
//           <h1>{websiteName}</h1>
//         </div>
//         <p>{slogan}</p>
//       </div>
//     </header>
//   );
// }

// export default Header;

// ///////////////////////////////////////////////////////////////////////////

// body {
//     background-color: #d9f1ed;
// }

// .homes-item-images {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     grid-gap: 10px;
// }

// .homes-item-images img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }
// .love-button {
//     background-color: grey;
//     border: none;
//     padding: 0.5rem;
//     border-radius: 50%;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// .love-button.loved {
//     background-color: red;
// }

// .navbar {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #f5f5f5;
//     padding: 1rem;
//     margin-top: 100px;
// }

// .navbar-container {
//     display: flex;
//     gap: 1rem;
//     padding-top: 50px
// }

// button#category {
//     background-color: #00DEB6;
//     color: #000;
//     border: none;
//     padding: 0.5rem 1rem;
//     margin-right: 1rem;
//     font-size: 1rem;
//     font-weight: bold;
//     border-radius: 0.25rem;
//     cursor: pointer;
// }

// button#category:hover {
//     background-color: #008d78;
//     color: #fff;
// }

// .search-form {
//     display: flex;
//     align-items: center;
// }
// .search-form input[type="text"] {
//     border: none;
//     padding: 0.5rem;
//     margin-right: 0.5rem;
//     border-radius: 0.25rem;
//     font-size: 1rem;
// }

// button#comment {
//     background-color: #0077c0;
//     color: #fff;
//     border: none;
//     padding: 0.5rem 1rem;
//     margin-right: 1rem;
//     font-size: 1rem;
//     font-weight: bold;
//     border-radius: 0.25rem;
//     cursor: pointer;
// }

// button#comment:hover {
//     background-color: #005ea3;
// }

// .header {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     z-index: 1;
//     background-size: cover;
//     background-position: center;
//     padding: 2rem 0;
// }

// .logo {
//     display: flex;
//     align-items: center;
//     margin-left: 2rem;
// }

// .logo h1 {
//     margin: 0;
//     font-family: 'Playfair Display', serif;
//     font-size: 2rem;
//     font-weight: bold;
//     color: #fff;
// }

// .logo-icon {
//     margin-right: 1rem;
//     color: #fff;
// }

// .header-slogan {
//     margin-right: 2rem;
//     color: #fff;
// }

// .header-background {
//     background-image: url("https://demo.wpzoom.com/presence-real-estate/files/2016/09/stephan-bechert-yFV39g6AZ5o-unsplash-1060x711.jpg");
//     background-size: cover;
//     background-position: center center;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 1rem 2rem;
// }

// //all my code save here but commented out