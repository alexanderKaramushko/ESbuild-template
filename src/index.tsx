import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';
import './style.css';

import Png from './assets/images/example-png.png';
import Jpeg from './assets/images/example-jpeg.jpeg';

import JsonFile from './assets/json/test.json';

function SomeComponent(): React.ReactElement {
  React.useEffect(() => {
    // check proxy
    (async (): Promise<void> => {
      const res = await window.fetch('/api/users');

      console.log(res);
    })();
  }, []);

  return (
    <div>
      <img src={Png} alt="" />
      <img src={Jpeg} alt="" />
      {JsonFile.name}
    </div>
  );
}

ReactDOM.render(
  <SomeComponent />,
  document.querySelector('#app'),
);
