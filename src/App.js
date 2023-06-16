// import "./App.css";
import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import KanbanBoard from "./component/KanbanBoard";

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Research",
      column: "To Do",
    },
    {
      id: 2,
      title: "Development",
      column: "On Progress",
    },
    {
      id: 3,
      title: "Testing",
      column: "Done",
    },
  ]);

  useEffect(() => {
    // Fetch cards from the server
  }, []);

  const handleCardDrag = (cardId, targetColumn) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, column: targetColumn };
        }
        return card;
      });
      return updatedCards;
    });
  };

  return (
    <div>
      <KanbanBoard cards={cards} handleCardDrag={handleCardDrag} />
    </div>
  );
};

export default App;
