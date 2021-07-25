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
  if(headerImgClass){  
  var imgHeaderClasses = ` ${headerImgClass}`;
  }
  let regularHeader = <header className="header">{children}</header>;

  let headerWithImg = <header className={imgHeaderClasses}>{children}</header>;
  if (headerImgClass != undefined) {
    return headerWithImg;
  }
  else {
      return null;
  }
};
