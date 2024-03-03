import './galleryitem.css';

export default function GalleryItem({ url, desc }) {
    return (
        <div className='gallery_item'>
            <img src={url} alt={desc} />
        </div>
    );
}