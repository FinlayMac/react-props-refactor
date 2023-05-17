import { IonImg, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import Flying from '../assets/flying.jpg';

export default function Painting() {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Flying Carpet (1880)</IonCardTitle>
                <IonCardSubtitle>Viktor Vasnetsov</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <IonImg src={Flying} alt="Flying Carpet by Viktor Vasnetsov"></IonImg>
            </IonCardContent>
        </IonCard>
    )
}