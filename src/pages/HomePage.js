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

        <Painting
          details={{
            title: 'Flying Carpet (1880)',
            subtitle: 'Viktor Vasnetsov',
            image: Flying,
            altTag: 'Flying Carpet by Viktor Vasnetsov'
          }}
        ></Painting>

        <Painting
          details={{
            title: 'King Lake, California (1870-1875)',
            subtitle: 'Albert Bierstadt',
            image: Mountains,
            altTag: 'King Lake, California by Albert Bierstadt'
          }}
        ></Painting>


        {/* 
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