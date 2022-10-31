import 'bootswatch/dist/darkly/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';

import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

import axiosDefaults from 'axios/lib/defaults';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

axiosDefaults.baseURL = process.env.REACT_APP_BASE_URL;

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reactGa: null,
    };
  }
  async componentDidMount() {
    if (process.env.REACT_APP_NODE_ENV === 'production') {
      const ReactGa = await import('react-ga');
      ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      this.setState({ reactGa: ReactGa });
      console.log('react ga initialized');
    }
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          {this.state.reactGa && (
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              <Route component={Error} />
            </Switch>
          )}
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
