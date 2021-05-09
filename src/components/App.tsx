
import './App.css';

import Countdown from '../containers/Countdown';
import { CountdownDetails } from '../store/countdowns';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface AppProps {
  countdowns: CountdownDetails[],
  onCreateCountdown: () => void,
  onReorderCountdown: (start: number, end: number) => void,
}

const App = (props: AppProps) => {
  const { countdowns, onCreateCountdown, onReorderCountdown } = props;

  const getListStyle = (_isDraggingOver: boolean) => ({
  });

  const getItemStyle = (isDragging: boolean, draggableStyle: any) => {
    return {
      background: isDragging ? '#c0c7d1' : '#e1e9f7',
      ...draggableStyle,
    };
  }

  const onDragEnd = (result: any) => {
    onReorderCountdown(result.source.index, result.destination.index);
  };

  return (
    <div>
      <div>
        <button onClick={onCreateCountdown}>Add Countdown</button>
      </div>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {countdowns.map((countdown, i) => 
                  <Draggable key={i} draggableId={i.toString()} index={i}>
                    {(provided, snapshot) => (
                      <div
                        className='countdown-container'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <Countdown
                          index={i}
                          countdown={countdown}
                        />
                      </div>
                    )}
                  </Draggable>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
};

export default App;
