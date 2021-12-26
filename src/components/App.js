import {PageTitle} from 'components/PageTitle/PageTitle';
import {EventBoard} from 'components/EventBoard/EventBoard';
import events from '../events.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Worlds Coalition Conference"/>
      <EventBoard events={events}/>
    </Container>
  );
};
