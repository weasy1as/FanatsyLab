"use client";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";

type PlayerImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function PlayerImage({
  src,
  alt,
  width = 180,
  height = 190,
}: PlayerImageProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // Show React Icon as fallback
    return (
      <div
        className="flex items-center justify-center w-[80px] h-[90px] bg-neutral-800 rounded"
        style={{ width, height }}
      >
        <FaUserAlt className="text-gray-400 text-2xl" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded"
      onError={() => setImgError(true)}
    />
  );
}
