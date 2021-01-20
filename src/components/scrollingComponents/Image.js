import React from 'react';

function Image(props) {
  return (
    <div className="imagesHolder">
      <div className="bottleHolder displayFlex">
        <img className="bottleImage" src={ props.bottleImage } />
        <div className="label displayFlex alignFlexStart">
          <img className="labelLogo" src={ props.logoImage } />
          <img className="labelFacts" src={ props.nutritionFactsImage } />
        </div>
      </div>
      { props.additionalImages.map((img, index) => (
        <img
          className = { `helperImage ${img.name}` }
          src       = { img.img }
          key       = { `img${index}` }
        />
      )) }
    </div>
  );
}

export default Image;
