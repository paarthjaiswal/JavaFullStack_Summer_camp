import React from "react";
import "./App.css";

const pizzas = [
  {
    name: "Margherita",
    ingredients: "Tomato, Mozzarella, Basil",
    size: "Medium",
    price: 299,
    image: "https://images.pexels.com/photos/4109121/pexels-photo-4109121.jpeg"
  },
  {
    name: "Pepperoni",
    ingredients: "Pepperoni, Cheese, Tomato Sauce",
    size: "Large",
    price: 399,
    image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg"
  },
  {
    name: "Veggie Delight",
    ingredients: "Olives, Capsicum, Onion",
    size: "Medium",
    price: 349,
    image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg"
  },
  {
    name: "BBQ Chicken",
    ingredients: "Chicken, BBQ Sauce, Onions",
    size: "Large",
    price: 449,
    image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg"
  },
  {
    name: "Paneer Tikka",
    ingredients: "Paneer, Spices, Cheese",
    size: "Medium",
    price: 369,
    image: "https://images.pexels.com/photos/1671215/pexels-photo-1671215.jpeg"
  },
  {
    name: "Hawaiian",
    ingredients: "Ham, Pineapple, Cheese",
    size: "Large",
    price: 419,
    image: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg"
  }
];

function App() {
  const orderPizza = (name, price) => {
    alert(`You have ordered a ${name} Pizza!\nTotal: ₹${price}`);
  };

  return (
    <div className="App">
      <h1>Our Pizza</h1>
      <div className="menu">
        {pizzas.map((pizza, index) => (
          <div className="pizza-card" key={index}>
            <img src={pizza.image} alt={pizza.name} className="pizza-image" />
            <div className="pizza-name">{pizza.name}</div>
            <div className="pizza-attribute">Ingredients: {pizza.ingredients}</div>
            <div className="pizza-attribute">Size: {pizza.size}</div>
            <div className="pizza-attribute">Price: ₹{pizza.price}</div>
            <button className="order-btn" onClick={() => orderPizza(pizza.name, pizza.price)}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
