import React from 'react';
import { IonContent, IonPage, IonImg, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import Flying from '../assets/flying.jpg';
import Mountains from '../assets/mountains.jpg';
import Cat from '../assets/cat.jpg';

import Painting from '../components/painting';

const paintings = [
  {
    title: 'Flying Carpet (1880)',
    subtitle: 'Viktor Vasnetsov',
    image: Flying,
    altTag: 'Flying Carpet by Viktor Vasnetsov'
  },
  {
    title: 'King Lake, California (1870-1875)',
    subtitle: 'Albert Bierstadt',
    image: Mountains,
    altTag: 'King Lake, California by Albert Bierstadt'
  },
  {
    title: "Winter: Cat on a Cushion (L'hiver: Chat sur un coussin)  (1913)",
    subtitle: 'Théophile Alexandre Steinlen',
    image: Cat,
    altTag: 'Winter: Cat on a Cushion by Théophile Alexandre Steinlen'
  }
];

export function ListAllPaintings() {
  const paintingCards = paintings.map(painting =>
    <Painting details={{ ...painting }}></Painting>
  );
  return <div className='paintings'>{paintingCards}</div>;
}


const HomePage = () => (

  <IonPage>
    <IonContent>
      <h1>This is the home page</h1>

      <ListAllPaintings></ListAllPaintings>
    </IonContent>
  </IonPage>
);

export default HomePage;