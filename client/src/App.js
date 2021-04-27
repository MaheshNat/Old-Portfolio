import React, { Component, Suspense } from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import axiosDefaults from 'axios/lib/defaults';
import Spinner from './components/Spinner';

const Navigation = React.lazy(() => import('./components/Navigation'));
const Home = React.lazy(() => import('./components/Home'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const Error = React.lazy(() => import('./components/Error'));
const Podcast = React.lazy(() => import('./components/Podcast'));

axiosDefaults.baseURL = process.env.REACT_APP_BASE_URL;

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  async componentDidMount() {
    if (process.env.NODE_ENV === 'production')
      import('react-ga').then((ReactGa) => {
        ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      });
  }
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/podcast" component={Podcast} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </Provider>
      </Suspense>
    );
  }
}

export default App;
