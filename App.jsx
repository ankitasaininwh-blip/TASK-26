
import React from "react";
import "./App.css";

const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1 description",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2 description",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3 description",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is card 4 description",
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is card 5 description",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is card 6 description",
    image:
      "https://images.unsplash.com/photo-1549608276-5786777e6587?w=400",
  },
];

// Reusable Card Component
function Card({ title, description, image }) {
  return (
    <div className="card-border">
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h2>All the cards are here.</h2>

      <div className="card-container">
        {cardData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
