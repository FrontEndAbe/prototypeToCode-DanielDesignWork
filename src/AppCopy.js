import React, { useState } from 'react';
import Nav                 from './components/nav/Nav';
import ContentSection      from './components/scrollingComponents/ContentSection';
import $                   from 'jquery';

// Importing all of the images
import bottle         from './images/bottle.png';
import nutritionFacts from './images/nutritionFacts.png';
import logo1          from './images/slide1/logo1.png';
import cherry         from './images/slide1/cherry.png';
import cherryNoStem   from './images/slide1/cherryNoStem.png';
import orangeSlice    from './images/slide1/orangeSlice.png';
import threeBottles   from './images/slide1/threebottles.png';
import logo2          from './images/slide2/logo2.png';
import apple          from './images/slide2/apple.png';
import coffee         from './images/slide2/coffee.png';
import matcha         from './images/slide2/matcha.png';
import oneBerry       from './images/slide2/oneBerry.png';
import threeBerries   from './images/slide2/threeBerries.png';
import logo3          from './images/slide3/logo3.png';
import chocolate      from './images/slide3/chocolate.png';
import chocolateBit   from './images/slide3/chocolateBit.png';
import chocolateScrap from './images/slide3/chocolateScrap.png';
import powder         from './images/slide3/powder.png';
import tumeric        from './images/slide3/tumeric.png';

const data = [
  {
    backgroundText      : "RENEW",
    slideNumber         : "01",
    descriptions        : [
      "The combination of apple",
      "and lemon in the perfect balance",
      "refreshed flavor"
    ],
    dropDowns           : [
      {
        title: "How To Consume",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      },
      {
        title: "Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      },
      {
        title: "Buying Options",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      }
    ],
    bottleImage         : bottle,
    nutritionFactsImage : nutritionFacts,
    logoImage           : logo1,
    additionalImages    : [
      {
        name : "cherry",
        img  : cherry
      },
      {
        name : "cherryNoStem",
        img  : cherryNoStem
      },
      {
        name : "orangeSlice",
        img  : orangeSlice
      }
    ],
    paperAssets         : {
      text : 'Our Daily Bundles',
      imgs  : [threeBottles]
    }
  },
  {
    backgroundText      : "REVIVE",
    slideNumber         : "02",
    descriptions        : [
      "A fresh punch of tangy green apple",
      "and tart blueberry to jolt your senses",
      "back to life"
    ],
    dropDowns           : [
      {
        title: "How To Consume",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      },
      {
        title: "Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      },
      {
        title: "Buying Options",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      }
    ],
    bottleImage         : bottle,
    nutritionFactsImage : nutritionFacts,
    logoImage           : logo2,
    additionalImages    : [
      {
        name : "apple",
        img  : apple
      },
      {
        name : "oneBerry",
        img  : oneBerry
      },
      {
        name : "threeBerries",
        img  : threeBerries
      }
    ],
    paperAssets         : {
      text : 'Our Ingredients Are',
      imgs  : [matcha, coffee]
    }
  },
  {
    backgroundText      : "REFUEL",
    slideNumber         : "03",
    descriptions        : [
      "Naturally sourced protein powder",
      "to give you all the energy you need",
      "in your workout"
    ],
    dropDowns           : [
      {
        title: "How To Consume",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      },
      {
        title: "Benefits",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      },
      {
        title: "Buying Options",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque euismod, risus nec mollis posuere, metus augue efficitur
        dolor, at malesuada dui nulla at quam. Praesent lobortis congue
        molestie. Phasellus hendrerit aliquam nisi id egestas. Aliquam
        ut congue mi, quis vestibulum arcu. Donec maximus ac arcu eget
        pulvinar. Quisque nibh p`
      }
    ],
    bottleImage         : bottle,
    nutritionFactsImage : nutritionFacts,
    logoImage           : logo3,
    additionalImages    : [
      {
        name : "chocolate",
        img  : chocolate
      },
      {
        name : "chocolateBit",
        img  : chocolateBit
      },
      {
        name : "chocolateScrap",
        img  : chocolateScrap
      }
    ],
    paperAssets         : {
      text : 'Our Ingredients Are',
      imgs  : [powder, tumeric]
    }
  }
]

function App() {
  // Keep track of which button is currently active
  const [activeButton, changeActiveButton] = useState(0);

  function scroll(index) {
    // These get the div with the three slides, the previous active button,
    // and the one that was just clicked
    const content        = $('#contentSectionHolder');
    const previousButton = $(`#button${activeButton}`);
    const chosenButton   = $(`#button${index}`);

    // If clicked button has an index bigger than the current button, move to the right,
    // If clicked button has an index smaller than the current button, move to the left,
    // Otherwise do nothing (incase the clicked button and the current button are the same)
    if (activeButton > index) {
      animationManager(`${activeButton}To${index}`, `${index}To${activeButton}`, activeButton, index);
      content.animate(
        { scrollLeft: content.scrollLeft() - (window.innerWidth * (activeButton - index)) },
        1500
      );
    } else if (index > activeButton) {
      animationManager(`${activeButton}To${index}`, `${index}To${activeButton}`, activeButton, index);
      content.animate(
        { scrollLeft: content.scrollLeft() + (window.innerWidth * (index - activeButton)) },
        1500
      );
    }
    else return;

    previousButton.removeClass('active');
    chosenButton.addClass('active');

    changeActiveButton(index);
  }

  function animationManager(direction, previousDirection) {
    const allClasses = {
      '0To1': [
        ['renew', 'renew0To1'],
        ['revive', 'revive0To1'],
        ['cherry', 'cherry0To1 helperImage'],
        ['cherryNoStem', 'cherryNoStem0To1 helperImage'],
        ['orangeSlice', 'orangeSlice0To1 helperImage'],
        ['renewBottle', 'renewBottle0To1 label displayFlex alignFlexStart']
      ],
      '0To2': [
        ['renew', 'renew0To1'],
        ['revive', 'revive0To2'],
        ['refuel', 'refuel1To2']
      ],
      '1To0': [
        ['renew', 'renew1To0'],
        ['revive', 'revive1To0'],
        ['cherry', 'cherry1To0 helperImage'],
        ['cherryNoStem', 'cherryNoStem1To0 helperImage'],
        ['orangeSlice', 'orangeSlice1To0 helperImage'],
        ['renewBottle', 'renewBottle1To0 label displayFlex alignFlexStart']
      ],
      '1To2': [
        ['revive', 'revive1To2'],
        ['refuel', 'refuel1To2']
      ],
      '2To1': [
        ['revive', 'revive2To1'],
        ['refuel', 'refuel2To1']
      ],
      '2To0': [
        ['renew', 'renew1To0'],
        ['revive', 'revive2To0'],
        ['refuel', 'refuel2To1']
      ]
    }

    allClasses[previousDirection].forEach(classes => { $(`#${classes[0]}`).removeClass(); });
    allClasses[direction].forEach(classes => { $(`#${classes[0]}`).addClass(classes[1]); });

  }

  return (
    <div className="app">
      <Nav />
      <div className="threeButtons displayFlex justifyCenter alignCenter">
        <button id="button0" className="oneOfThree active" onClick={ () => { scroll(0) } }></button>
        <button id="button1" className="oneOfThree"        onClick={ () => { scroll(1) } }></button>
        <button id="button2" className="oneOfThree"        onClick={ () => { scroll(2) } }></button>
      </div>
      <div id="contentSectionHolder">
        { data.map((section, index) => <ContentSection data={section} key={`section${index}`} />) }
      </div>
    </div>
  );
}

export default App;
