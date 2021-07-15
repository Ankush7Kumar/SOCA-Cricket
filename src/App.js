import React, { useRef, useEffect } from 'react';
import { useLocation, Switch} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';


//Route
import { Route } from 'react-router-dom';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
//import Testimonial from './views/Testimonial';
import Stats from './views/Stats';
import ScoreCard from './views/ScoreCard';
import News from './views/News';
import About from './views/About';
import Teams from './views/Teams';
import TeamList from './views/TeamList';
import Sponsors from './views/Sponsors';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);




  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch> 
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Teams" component={Teams} layout={LayoutDefault} />
          <AppRoute exact path="/Stats" component={Stats} layout={LayoutDefault} />
          <AppRoute exact path="/About" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/News" component={News} layout={LayoutDefault} />
          <AppRoute exact path="/Teams/:teamId" component={TeamList} layout={LayoutDefault} />
          <AppRoute exact path="/Sponsors" component={Sponsors} layout={LayoutDefault} />
          <AppRoute exact path="/Stats/ScoreCard" component={ScoreCard} layout={LayoutDefault} />
        </Switch> 
      )} />
  );
}

export default App; 