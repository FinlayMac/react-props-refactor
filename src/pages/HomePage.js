import React from 'react';
import { IonContent, IonPage, IonImg, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import { ListAllPaintings } from '../components/listAllPaintings';

import { paintings } from '../resources/paintings';
import { berries } from '../resources/fruit';


const HomePage = () => (

  <IonPage>
    <IonContent>
      <h1>This is the home page</h1>

      <ListAllPaintings
        arrayOfItems={paintings}>
      </ListAllPaintings>

      <ListAllPaintings
        arrayOfItems={berries}>
      </ListAllPaintings>
      
    </IonContent>
  </IonPage>
);

export default HomePage;