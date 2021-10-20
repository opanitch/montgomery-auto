import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import defaultGarage from 'ASSETS/images/stock-garage.jpg';

type ImageBackgroundProps = JSX.IntrinsicElements['div'] & {
  customImage?: string;
};

const ImageBackground: FunctionComponent<ImageBackgroundProps> = ({
  className: ParentClasses,
  customImage,
}) => {
  const image = customImage || defaultGarage;

  return (
    <div
      className="absolute w-full h-screen overflow-hidden bg-black bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% auto',
      }}
    ></div>
  );
};

export default ImageBackground;
