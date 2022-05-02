import { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

import { DataContext } from '../../services/dataContext';
import { IdsContext } from '../../services/idsContext';

import api from '../../utils/api';

import appStyles from './app.module.css';

function App() {

  const [data, setData] = useState([]);
  const [order, setOrder] = useState(null);
  const closeOrderModal = () => setOrder(null);
  const [ingredientInModal, setIngredientInModal] = useState(null);
  const closeIngredientModal = () => setIngredientInModal(null)
  const [numberOfOrder, setNumberOfOrder] = useState(0);
  const idsState = useState({ ingredients: [] });
   const [ids, setIds] = idsState;

  useEffect(() => {
    api.getItems()
      .then(res => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function sendOrder() {
    api.setOrder(ids)
      .then(res => setNumberOfOrder(res))
      .catch((error) => {
        console.log(error);
      });
    setOrder(true);
  }

  return (
    <>
      <div className={appStyles.app}>
        <AppHeader />
        <div className={appStyles.burgerConstructor}>
          <BurgerIngredients data={data} setIngredientInModal={setIngredientInModal} />
          <DataContext.Provider value={data}>
            <IdsContext.Provider value={idsState}>
              <BurgerConstructor setOrder={sendOrder} />
            </IdsContext.Provider>
          </DataContext.Provider>
        </div>

        {order && (
          <Modal closeModal={closeOrderModal}>
            <OrderDetails numberOfOrder={numberOfOrder} />
          </Modal>
        )
        }

        {ingredientInModal && (
          <Modal title='Детали ингредиента' closeModal={closeIngredientModal}>
            <IngredientDetails ingredientData={ingredientInModal} />
          </Modal>
        )}
      </div >
    </>
  );
}

export default App;
