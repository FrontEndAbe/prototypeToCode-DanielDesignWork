import React    from 'react';
import DropDown from './DropDown';
import Image    from './Image';

function ContentSection(props) {
  return (
    <div className={ `contentSection ${ props.data.backgroundText.toLowerCase() }` }>
      <h1 id={ `${ props.data.backgroundText.toLowerCase() }` }>{ props.data.backgroundText }</h1>
      <div className="topPortion">
        <div className="left">
          <p className="slideNumber">{ props.data.slideNumber }</p>
          <div className="whiteDash"></div>
          <div className="descriptionHolder">
            { props.data.descriptions.map((desc, index) => <p className="description" key={ `desc${index}` }>{ desc }</p>) }
          </div>
        </div>
        <div className="middle displayFlex flexCol justifyBetween">
          <Image
            bottleId            = { `${ props.data.backgroundText.toLowerCase() }Bottle` }
            bottleImage         = { props.data.bottleImage }
            nutritionFactsImage = { props.data.nutritionFactsImage }
            logoImage           = { props.data.logoImage }
            additionalImages    = { props.data.additionalImages }
          />
        </div>
        <div className="right">
          <div className="dropDownContainer">
            { props.data.dropDowns.map((currentDropDown, index) => <DropDown data={currentDropDown} index={index} key={index} />) }
          </div>
        </div>
      </div>
      <div className="bottomPortion displayFlex justifyCenter">
        <div className="paperLookinAss displayFlex justifyBetween alignCenter">
          <p className="bottomText">{ props.data.paperAssets.text }</p>
          <div className="assets">
            { props.data.paperAssets.imgs.map((img, index) => <img src={ img } key={ `paperImage${index}` } />) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
