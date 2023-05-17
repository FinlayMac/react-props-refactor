import { IonImg, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';

export default function Card({details}) {

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{details.title}</IonCardTitle>
                <IonCardSubtitle>{details.subtitle}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <IonImg src={details.image} alt={details.altTag}></IonImg>
            </IonCardContent>
        </IonCard>
    )
}
