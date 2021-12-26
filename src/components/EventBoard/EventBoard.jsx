import { Event } from 'components/Event/Event';
import { Board } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
    return (
        <Board>
            {events.map(eventObj => (
                <Event key={eventObj.name} eventObj={eventObj} />
            ))}
        </Board>
    );
}