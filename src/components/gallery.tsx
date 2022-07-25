import { useEffect, createRef } from "react";
import "./gallery-style.css";
import imageData from "../data";
import GalleryItem from "./gallery-item";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const Gallery = () => {
  const galleryRef = createRef<HTMLDivElement>();

  useEffect(() => {
    Draggable.create(galleryRef.current, {
      bounds: "body",
      inertia: true,
    });
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      {imageData.map((item) => {
        return (
          <GalleryItem
            key={item.key}
            picture={item.image}
            author={item.author}
          />
        );
      })}
      {imageData.map((item) => {
        return (
          <GalleryItem
            key={item.key + 10}
            picture={item.image}
            author={item.author}
          />
        );
      })}
      {imageData.map((item) => {
        return (
          <GalleryItem
            key={item.key + 30}
            picture={item.image}
            author={item.author}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
