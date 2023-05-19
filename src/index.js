import App from '../src/App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);


const root = createRoot(document.getElementById('root'));


root.render(rootReactElement);



