import { createContext, useState } from "react";
import pic from './allPic.js';

export const GalleryFilter = createContext();

export function Context(props) {

    const [pics, setPics] = useState(pic);

    const all_tags = function () {
        const tags = pic.reduce((acc, curr) => {
            curr.category.forEach(category => {
                if (!acc.includes(category)) {
                    acc.push(category);
                }
            });
            return acc;
        }, []);

        return tags
    }

    const handler_find = function (tag, e) {
        let found = [];
        if (tag === 'All') {
            found = pic.filter(elem => elem);
        } else {
            found = pic.filter(elem => elem.category.includes(tag));
        }
        setPics(found);

        e.target.parentElement.childNodes.forEach(elem => { elem.style.backgroundColor = null });
        e.target.style.backgroundColor = "#252525";
    }

    const value = { pics, setPics, handler_find, all_tags };

    return <GalleryFilter.Provider value={value}>{props.children}</GalleryFilter.Provider>
}