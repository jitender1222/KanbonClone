import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const KanbanBoard = ({ cards, handleCardDrag }) => {
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    handleCardDrag(draggableId, destination.droppableId);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        <div className="column">
          <h2>To Do</h2>
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="cards"
              >
                <div className="column-content">
                  {cards
                    .filter((card) => card.column === "To Do")
                    .map((card, index) => (
                      <Draggable
                        key={card.id}
                        draggableId={card.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="card"
                          >
                            {card.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="column">
          <h2>On Progress</h2>
          <Droppable droppableId="inProgress">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="cards"
              >
                <div className="column-content">
                  {cards
                    .filter((card) => card.column === "On Progress")
                    .map((card, index) => (
                      <Draggable
                        key={card.id}
                        draggableId={card.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="card"
                          >
                            {card.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="column">
          <h2>Done</h2>
          <Droppable droppableId="done">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="cards"
              >
                <div className="column-content">
                  {cards
                    .filter((card) => card.column === "Done")
                    .map((card, index) => (
                      <Draggable
                        key={card.id}
                        draggableId={card.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="card"
                          >
                            {card.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
