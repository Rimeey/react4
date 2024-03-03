import { useContext } from "react";
import { GalleryFilter } from "../../Context";

export default function FiltersItem({ tag }) {

    const { handler_find } = useContext(GalleryFilter);

    return (
        <p onClick={(e) => handler_find(tag, e)}>{tag}</p>
    );
}