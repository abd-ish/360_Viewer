import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('Slideshow', {
      photos: [
        {uri: './static_assets/360_world.jpg', title: 'Beach', format: '2D'},
        {uri: './static_assets/360_world1.jpg', title: 'Australia', format: '2D'},
        {uri: './static_assets/360_world5.jpg', title: 'Mountains', format: '2D'},
       
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};