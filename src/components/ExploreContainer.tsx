import { MouseEventHandler } from 'react';
import './ExploreContainer.css';
import { IonButton } from '@ionic/react';
import { Redirect } from 'react-router';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  return (
    <div id="container">
      <strong>Home</strong>
      <p>Pablo Prado</p>
      <p>18002407</p>
      <IonButton color="primary" href='/countries'>Load</IonButton>
    </div>
  );
};

export default ExploreContainer;
