import styles from './OrderDetails.module.css'
import image from '../../../images/done.svg'
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";


const modalRoot = document.getElementById("modal");

export default function OrderDetails( {isModalOpened, toggleModal}) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const orderNumber = getRandomInt(999999);
 
  if (isModalOpened) {
    return ReactDOM.createPortal(
        (
    <section className={styles.order_details__modal}>
        <h2 className="text text_type_digits-large mt-30">{orderNumber}</h2>
        <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
        <img className="mt-15" src = {image} style={{width:"120px", height:"120px", backgroundCover:'no-repeat', backgroundSize:'cover'}}/>
        <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
        <button id = 'button_modal_close' onClick={() => toggleModal()} className={styles.ingredient__modal_close}></button>
      </section>
       ), 
       modalRoot
     )}};


OrderDetails.propTypes = {
  isModalOpened: PropTypes.bool,
  toggleModal: PropTypes.func,
}; 