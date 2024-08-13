import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home_Router from './page/Home_Router.jsx';
import { Provider } from 'react-redux';
import store from './store/store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Home_Router />
    </Provider>
  </StrictMode>
)
