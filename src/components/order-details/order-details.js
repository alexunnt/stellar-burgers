import orderDetailsStyles from './order-details.module.css';

import PropTypes from 'prop-types';

import doneImage from '../../images/done_clean.png';

function OrderDetails({ numberOfOrder }) {
    return (
        <>
            <p className={`${orderDetailsStyles.number} text text_type_digits-large mb-8`}>{numberOfOrder}</p>
            <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
            <img src={doneImage} alt="Успешно" />
            <p className="text text_type_main-default mb-2 mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

OrderDetails.propTypes = {
    numberOfOrder: PropTypes.number.isRequired
}

export default OrderDetails;