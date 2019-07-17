import React from 'react';
import ReactDOM from 'react-dom';
import UpdatingLocationMap from '../UpdatingLocationMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdatingLocationMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
