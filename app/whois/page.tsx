"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const imageFilenames = [
  "lame.jpg",
  "me (1).jpg",
  "me (2).jpg",
  "me (3).jpg",
  "me (4).jpg",
  "me (5).jpg",
  "me (6).jpg",
  "me (7).jpg",
];

export default function Whois() {
  const lastImageTimestamp = useRef(0);

  const [images, setImages] = useState(
    imageFilenames.map((filename, i) => ({
      id: i,
      x: 0,
      y: 0,
      src: `/images/${filename}`,
      visible: false,
      rotation: 0,
      zIndex: 0,
    })),
  );

  return (
    <main>
      <div className="m-2 md:m-4">
        <div className="m-4 flex items-center justify-center">
          <p className="rounded bg-black px-2 py-0.5 font-bold uppercase text-white">
            Hover/touch to see images!
          </p>
        </div>
        <p
          className="mx-auto cursor-crosshair text-justify text-xl sm:w-[80vw]"
          onMouseMove={(e: React.MouseEvent) => {
            const now = Date.now();
            if (now - lastImageTimestamp.current < 200) {
              return;
            }
            lastImageTimestamp.current = now;

            setImages((prevImages) => {
              const availableImages = prevImages.filter((img) => !img.visible);
              if (availableImages.length === 0) {
                return prevImages;
              }
              const randomImage =
                availableImages[
                  Math.floor(Math.random() * availableImages.length)
                ];
              const rotation = Math.random() * 20 - 10; // generate a random rotation angle
              const maxZIndex = Math.max(
                ...prevImages.map((img) => img.zIndex),
              );
              return prevImages.map((img) =>
                img.id === randomImage.id
                  ? {
                      ...img,
                      x: e.clientX,
                      y: e.clientY,
                      visible: true,
                      animating: true,
                      rotation: rotation,
                      zIndex: maxZIndex + 1,
                    }
                  : img,
              );
            });
          }}
          onTouchMove={(e: React.TouchEvent) => {
            const now = Date.now();
            if (now - lastImageTimestamp.current < 200) {
              return;
            }
            lastImageTimestamp.current = now;

            setImages((prevImages) => {
              const availableImages = prevImages.filter((img) => !img.visible);
              if (availableImages.length === 0) {
                return prevImages;
              }
              const randomImage =
                availableImages[
                  Math.floor(Math.random() * availableImages.length)
                ];
              const rotation = Math.random() * 20 - 10; // generate a random rotation angle
              const maxZIndex = Math.max(
                ...prevImages.map((img) => img.zIndex),
              );
              return prevImages.map((img) =>
                img.id === randomImage.id
                  ? {
                      ...img,
                      x: e.touches[0].clientX,
                      y: e.touches[0].clientY,
                      visible: true,
                      animating: true,
                      rotation: rotation,
                      zIndex: maxZIndex + 1,
                    }
                  : img,
              );
            });
          }}
        >
          Hello there! I&apos;m Andre Koga, a 21 years old guy who loves
          technology and is always looking for new things to learn. With a
          Brazilian origin, a Japanese heritage, and a home in the US,
          exploration is my middle name. I&apos;m a computer science student at
          Georgia Tech, and I&apos;ve been working with web development for the
          past 3 years. I&apos;m also a game developer and digital artist. I
          love animals - divided between dogs and cats - and I&apos;m always
          listening to music - half-alive fan.
        </p>
        {images
          .filter((image) => image.visible)
          .map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="Me!"
              width={200}
              height={200}
              className="rounded-lg"
              style={{
                zIndex: image.zIndex,
                objectFit: "cover",
                pointerEvents: "none",
                position: "fixed",
                width: "24vh",
                height: "24vh",
                top: `calc(${image.y}px - 12vh)`, // subtract half of the image height
                left: `calc(${image.x}px - 12vh)`, // subtract half of the image width
                animation: "fade 1.5s forwards",
                transform: `rotate(${image.rotation}deg)`,
              }}
              onAnimationEnd={() => {
                setImages((prevImages) =>
                  prevImages.map((img) =>
                    img.id === image.id
                      ? { ...img, visible: false, animating: false }
                      : img,
                  ),
                );
              }}
            />
          ))}
      </div>
    </main>
  );
}
