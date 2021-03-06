import burgerConstructorStyles from './burger-constructor.module.css';
import PropTypes from 'prop-types';

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../services/dataContext';
import { IdsContext } from '../../services/idsContext';

function BurgerConstructor({ setOrder }) {
    const data = useContext(DataContext);
    const [ids, setIds] = useContext(IdsContext);

    const [sum, setSum] = useState(0);

    useEffect(() => {
        let totalSum = 0;
        let arrayOfids = [];
        const priceOfBuns = 2510;

        data.map((item) => {
            if (item.type !== "bun") {
                totalSum += item.price;
                arrayOfids.push(item._id);
            }
        });
        
        setSum(priceOfBuns + totalSum);
        setIds({ ingredients: arrayOfids });
    }, [data, setSum]);


    return (
        <>
            {data.length !== 0 &&
                (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={`${burgerConstructorStyles.main} ml-10 pt-25`}>
                        <div className='ml-8'>
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text="Краторная булка N-200i (верх)"
                                price={data[0].price}
                                thumbnail={data[0].image}
                            />
                        </div>

                        <div className={`${burgerConstructorStyles.items} ${burgerConstructorStyles.scrolled}`}>
                            {data.map((item) => {
                                if (item.type !== "bun") {
                                    return (
                                        <div key={item._id} className={`${burgerConstructorStyles.element} mt-4 mr-4`}>
                                            <DragIcon type="primary" />
                                            <ConstructorElement
                                                text={item.name}
                                                price={item.price}
                                                thumbnail={item.image}
                                            />
                                        </div>
                                    )
                                }
                            })}
                        </div>

                        <div className='ml-8'>
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text="Краторная булка N-200i (низ)"
                                price={data[0].price}
                                thumbnail={data[0].image}
                            />
                        </div>

                        <div className={`${burgerConstructorStyles.order} mt-10`}>
                            <div className={`${burgerConstructorStyles.price} mr-10`}>
                                <p className={`${burgerConstructorStyles.amount} text text_type_digits-medium`}>{sum}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <Button type="primary" size="large" onClick={setOrder}>
                                Оформить заказ
                            </Button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

BurgerConstructor.propTypes = {
    setOrder: PropTypes.func.isRequired
}

export default BurgerConstructor;
