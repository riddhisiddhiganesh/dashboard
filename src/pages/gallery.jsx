import React from "react";
import CenterSlider from "../component/CenterSlider";

function Gallery({ isMobile }) {
  return (
    <div>
      <CenterSlider isMobile={isMobile} />
    </div>
  );
}

export default Gallery;
