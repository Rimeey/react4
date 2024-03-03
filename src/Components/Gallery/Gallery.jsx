import { useContext } from "react";
import { GalleryFilter } from "../../Context";
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './gallery.css';

export default function Gallery() {

    const { pics } = useContext(GalleryFilter);

    return (
        <div className="gallery">
            {pics.map(elem =>
                <GalleryItem
                    key={elem.id}
                    url={elem.url}
                    desc={elem.description}
                />)}
        </div>
    );
}