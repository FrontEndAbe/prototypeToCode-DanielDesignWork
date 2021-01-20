import React from 'react';
import { ReactComponent as PlusIcon } from '../../images/plusIcon.svg';

function DropDown(props) {
  function doTheDrop(index) {
    let ddTexts = document.getElementsByClassName("dropDownText");

    ddTexts[index].style.maxHeight = ddTexts[index].style.maxHeight ? null : `${ddTexts[index].scrollHeight}px`;
  }

  return (
    <div onClick={() => doTheDrop(props.index)} className="dropDown">
      <div className="dropDownButton displayFlex justifyBetween">
        <p>{props.data.title}</p>
        <PlusIcon />
      </div>
      <div className="dropDownText">
        <p>{props.data.text}</p>
      </div>
    </div>
  );
}

export default DropDown;
