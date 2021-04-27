import React, { Component } from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import Podcast from './components/Podcast';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import axiosDefaults from 'axios/lib/defaults';

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
    );
  }
}

export default App;
