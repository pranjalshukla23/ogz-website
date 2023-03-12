import Image from "next/image";
import { FC } from "react";

interface Iprops {
  imgSrc: string;
  imgAlt: string;
}

const ArrowButton: FC<Iprops> = ({ imgSrc, imgAlt }) => {
  return (
    <button style={{ backgroundColor: "transparent", border: "none" }}>
      <Image src={imgSrc} alt={imgAlt} width={50} height={50} />
    </button>
  );
};

export default ArrowButton;
