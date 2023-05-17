import Card from "./card";

export function Gallery({ arrayOfItems }) {

    const galleryCards = arrayOfItems.map(child =>
        <Card details={{ ...child }} key={child.id}></Card>
    );
    return <div className='gallery'>{galleryCards}</div>;
}