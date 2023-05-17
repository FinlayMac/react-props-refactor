import React from 'react';
import { IonContent, IonPage, IonImg, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import Flying from '../assets/flying.jpg';
import Mountains from '../assets/mountains.jpg';
import Cat from '../assets/cat.jpg';

import Painting from '../components/painting';

const HomePage = () => (

  <IonPage>
    <IonContent>
      <h1>This is the home page</h1>

      <div className='paintings'>
        
        <Painting></Painting>
        <Painting></Painting>

        {/* <IonCard>
          <IonCardHeader>
            <IonCardTitle>Flying Carpet (1880)</IonCardTitle>
            <IonCardSubtitle>Viktor Vasnetsov</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonImg src={Flying} alt="Flying Carpet by Viktor Vasnetsov"></IonImg>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>King Lake, California (1870-1875)</IonCardTitle>
            <IonCardSubtitle>Albert Bierstadt</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonImg src={Mountains} alt="King Lake, California by Albert Bierstadt"></IonImg>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Winter: Cat on a Cushion (L'hiver: Chat sur un coussin)  (1913)</IonCardTitle>
            <IonCardSubtitle>Théophile Alexandre Steinlen</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonImg src={Cat} alt="Winter: Cat on a Cushion by Théophile Alexandre Steinlen"></IonImg>
          </IonCardContent>
        </IonCard> */}

      </div>
    </IonContent>
  </IonPage>
);

export default HomePage;