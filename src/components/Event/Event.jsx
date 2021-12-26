import PropTypes from 'prop-types';
import { theme } from '../constants/Theme';

import { FaMapMarkerAlt,
         FaUserAlt,
         FaCalendarAlt,
         FaClock,
} from 'react-icons/fa';

import { formatEventStart, formatEventDuration } from 'helpers';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({eventObj: {name, location, speaker, time, type}}) => {
  
    return (
      <Card>
          <EventName>{name}</EventName>
          <Info>
            {/* <i></i> */}
            <FaMapMarkerAlt size={15} color={(props => props.theme.colors.blue)} />
            {location} 
          </Info>
          <Info>
            {/* <i></i> */}
            <FaUserAlt size={15} color="#757575"/>
            {speaker}
          </Info>
          <Info>
            {/* <i></i> */}
            <FaCalendarAlt size={15} color="#757575"/>
            {formatEventStart(time.start)}
          </Info>
          <Info>
            {/* <i></i> */}
            <FaClock size={15} color="#757575"/>
               {formatEventDuration(time.start, time.end)}
          </Info>
          <Chip eventType={type}>{type}</Chip>
      </Card>
    );
};



Event.propTypes = {
    eventObj: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
      speaker: PropTypes.string,
      time: PropTypes.object,
      type: PropTypes.string, 
    })
}