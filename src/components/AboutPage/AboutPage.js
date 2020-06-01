import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Boredgamr is a social platform for folks to find boardgame's to play with others. Users are able to create 
        a free account and join future events and/or post event's they would like to host. Nerds of the world unite! 
      </p>
    </div>
  </div>
);

export default AboutPage;
