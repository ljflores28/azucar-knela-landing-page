import classNames from "classnames";
import React from "react";

interface ParallaxSectionProps {
  id: string;
  backgroundImage: string;
  nextBackgroundImage: string;
  prevBackgroundImage?: string;
  children: React.ReactNode;
  isVisible: boolean;
}

const ParallaxSection = ({
  id,
  backgroundImage,
  nextBackgroundImage,
  children,
  isVisible,
}: ParallaxSectionProps) => {
  return (
    <div
      id={id}
      className="relative parallax-section w-full sm:px-[5vw] md:px-[7vw] xl:px-[15vw] bg-cover bg-fixed transition-opacity duration-1000"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={classNames('absolute inset-0 bg-cover bg-fixed transition-opacity duration-1000', {
            'opacity-100': !isVisible,
            'opacity-0': isVisible
        })}
        style={{ backgroundImage: `url(${nextBackgroundImage})` }}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
