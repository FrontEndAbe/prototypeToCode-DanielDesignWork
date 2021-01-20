import React          from 'react';
import Nav            from './components/nav/Nav';
import ContentSection from './components/scrollingComponents/ContentSection';

// Importing all of the images
import bottle         from './images/bottle.png';
import nutritionFacts from './images/nutritionFacts.png';
import logo1          from './images/slide1/logo1.png';
import cherry         from './images/slide1/cherry.png';
import cherryNoStem   from './images/slide1/cherryNoStem.png';
import orangeSlice    from './images/slide1/orangeSlice.png';

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
    ]
  }
]

function App() {
  return (
    <div className="app">
      <Nav />
      { data.map((section, index) => <ContentSection data={section} key={`section${index}`} />) }
    </div>
  );
}

export default App;
