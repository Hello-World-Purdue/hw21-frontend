import React, { FC } from 'react';

type ImageHeaderProps = {
  headerImgClass: string;
};

export const ImageHeader: FC<
  ImageHeaderProps & React.HTMLAttributes<HTMLDivElement>
> = ({ headerImgClass, children }) => {
  if (headerImgClass) {
    var imgHeaderClasses = ` ${headerImgClass}`;
  }
  let regularHeader = <header className="header">{children}</header>;

  let headerWithImg = <header className={imgHeaderClasses}>{children}</header>;
  if (headerImgClass != undefined) {
    return headerWithImg;
  } else {
    return null;
  }
};
