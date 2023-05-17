import React from 'react';
import { IonContent, IonPage, IonImg, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import { Gallery } from '../components/gallery';

import { paintings } from '../resources/paintings';
import { berries } from '../resources/fruit';


const HomePage = () => (

  <IonPage>
    <IonContent>
      <h1>This is the home page</h1>

      <Gallery
        arrayOfItems={paintings}>
      </Gallery>

      <Gallery
        arrayOfItems={berries}>
      </Gallery>
      
    </IonContent>
  </IonPage>
);

export default HomePage;