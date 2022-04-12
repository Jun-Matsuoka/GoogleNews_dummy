import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Covid19 } from './compornents/Covid19';
import DataGridTest from './compornents/DataGrid';
import PersistentDrawerLeft from './compornents/Header2';
import { TopPage } from './compornents/TopPage';

function App() {
  // const history = useHistory();
  return (
    // <Header>
    //   <DataGridTest />
    //   <TopPage/>
    //   <Covid19/>
    <>
      <BrowserRouter>
        <PersistentDrawerLeft />
        <Switch>
          <Route exact path="/">
            <TopPage />
          </Route>
          <Route path="/weather">
            <DataGridTest />
          </Route>
          <Route path="/Covid19">
            <Covid19 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;