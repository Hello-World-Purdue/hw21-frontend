import React, { FC } from "react";

import Link from "next/link";

//import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";

type ImageHeaderProps = {
  headerImgClass: string;
};

export const ImageHeader: FC<
  ImageHeaderProps & React.HTMLAttributes<HTMLDivElement>
> = ({ headerImgClass, children }) => {
console.log("Is ImageHeader class run twice?");
  if(headerImgClass){  
  var imgHeaderClasses = ` ${headerImgClass}`;
  }
  let regularHeader = <header className="header">{children}</header>;

  let headerWithImg = <header className={imgHeaderClasses}>{children}</header>;
  if (headerImgClass != undefined) {
    console.log("the header has a class");
    console.log("headerImgClass: " + headerImgClass);
    return headerWithImg;
  }
  else {
      return null;
  }
};
