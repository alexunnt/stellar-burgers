import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import appStyles from './app.module.css';

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <div className={appStyles.burgerConstructor}>
        <BurgerIngredients />
      </div>
    </div >
  );
}

export default App;
