import { useContext } from "react";
import { GalleryFilter } from "../../Context";
import FiltersItem from "./FiltersItem";
import './filters.css';

export default function Filters() {

    const { all_tags } = useContext(GalleryFilter);

    const tags = all_tags();

    return (
        <div className="filters">
            <FiltersItem tag="All" />
            {tags.map(elem => <FiltersItem tag={elem} />)}
        </div>
    );
}