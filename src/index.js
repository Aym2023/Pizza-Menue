import React from "react";

import ReactDom from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // color:"red", fontSize: "48", texeTransform: "uppercase"}
  const style = {};

  return (
    <header className="header footer">
      <h1 style={style}>Fast pizza Co.</h1>
    </header>
  )
}

function Menu() {
  // const pizzes = [];
  const pizzes = pizzaData;
  const pizzesNum = pizzes.length;


  return (
    <main>
      <h2>Our Menu</h2>
      {pizzesNum > 0 ? (
      <>
  <p>
     Authentic Italian cuisine. 6 creative dishes to choose from.All from our stone oven, all organic, all delicious
     </p>
  <ul className="pizzas" >
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
        </>
      ) : (
        <p>
           We're working on our menu. Plearse come back later
           </p>
      )}

      {/* <Pizza 
      name="Pizza Spinaci" 
      ingridents="Tomato, mozarella, spinach, and ricotta cheese" 
      photoName="pizzas/spinaci.jpg" 
      price={12}
       />

      <Pizza
       name="Pizza Funghi"
       ingredients="Tomato, mozarella mushrooms, and onion"  
       price= {10}
       photoName="pizzas/funghi.jpg"
       /> */}
    </main>
  );
}

function Pizza({pizzaObj}) {

//  if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "SOLD OUT" :""}  `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <p>{pizzaObj.ingredients}</p>
        <h1>{pizzaObj.name}</h1>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if ( hour >= hourOpen && hour <= hourClose) alert("We're currenly open");
  //  else alert("Sorry we closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ):  
       <p>
      We're happy to welcome you between {openHour}:00 and {closeHour}:00. 
    </p>
}
    </footer>
  );
}

function Order ({closeHour}) { 
  return (
<div className="order">
  <p>
    We're currently open untill {closeHour}:00. Come visit us or order
    online.
  </p>
  <button className="btn">Order</button>
</div>  
);      
}



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
