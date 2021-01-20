import React                          from 'react';
import DropDown                       from './DropDown';
import Image                          from './Image';
import { ReactComponent as PlusIcon } from '../../images/plusIcon.svg';

function ContentSection(props) {
  return (
    <div className="contentSection">
      <h1 className="backgroundText">{ props.data.backgroundText }</h1>
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
      <div className="bottomPortion">
        {
          // Bottom content will go here
        }
      </div>
    </div>
  );
}

export default ContentSection;
