import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@ionic/react/css/core.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { setupIonicReact, IonButton, useIonRouter, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import { homeSharp, radio, library, search } from 'ionicons/icons';


import HomePage from './pages/HomePage';
import RadioPage from './pages/RadioPage';
import LibraryPage from './pages/LibraryPage';
import SearchPage from './pages/SearchPage';

function App() {

  setupIonicReact();
  defineCustomElements(window);
  //intialise



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <IonButton>This is a button</IonButton>
      </header> */}

      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* <Redirect exact path="/" to="/" /> */}
            {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
            <Route path="/" render={() => <HomePage />} exact={true} />
            <Route path="/radio" render={() => <RadioPage />} exact={true} />
            <Route path="/library" render={() => <LibraryPage />} exact={true} />
            <Route path="/search" render={() => <SearchPage />} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/">
              <IonIcon icon={homeSharp} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="radio" href="/radio">
              <IonIcon icon={radio} />
              <IonLabel>Radio</IonLabel>
            </IonTabButton>

            <IonTabButton tab="library" href="/library">
              <IonIcon icon={library} />
              <IonLabel>Library</IonLabel>
            </IonTabButton>

            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </div>
  );
}
export default App;
