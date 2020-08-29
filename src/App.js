import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Quotes from "./containers/Quotes/Quotes";
import SubmitNewQuote from "./containers/SubmitNewQuote/SubmitNewQuote";
import EditQuote from "./containers/EditQuote/EditQuote";

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Quotes}/>
          <Route path="/add-quote" component={SubmitNewQuote}/>
          <Route path="/quotes/:category" component={Quotes}/>
          <Route path="/quote/:id/edit" component={EditQuote}/>
        <Route render={() => <h1>404 Not Found</h1>}/>
      </Switch>
    </BrowserRouter>
);

export default App;
