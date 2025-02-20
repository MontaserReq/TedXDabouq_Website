"use client";

import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

interface ImageProps {
  src: string;
  alt?: string;
}

const ImgKT = ({ src, alt }: ImageProps) => {
  return <IKImage urlEndpoint={urlEndpoint} path={src} alt={alt || "Image"} />;
};

export default ImgKT;
