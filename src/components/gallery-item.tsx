import React from "react";
import "./gallery-item-style.css"

interface Props {
    picture: string,
    author: string,
}

const GalleryItem: React.FC<Props> = ({picture, author}) => {
    return (
        <div className="gallery-item">
            <img src={picture} alt="tile" />
            <p>{author}</p>
        </div>
    )
}

export default GalleryItem;