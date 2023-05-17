import Painting from "./painting";

export function ListAllPaintings({ arrayOfItems }) {

    const paintingCards = arrayOfItems.map(painting =>
        <Painting details={{ ...painting }} key={painting.id}></Painting>
    );
    return <div className='paintings'>{paintingCards}</div>;
}