import styles from './IngredientDetails.module.css'
import ReactDOM from 'react-dom';
import IngredientDetailNutrition from '../IngredientDetails/IngredientDetailNutrition/IngredientDetailNutrition'
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");

export default function IngredientDetails({ingredient, isModalOpened, toggleModal}) {
  if (isModalOpened) {
    return ReactDOM.createPortal(
        (
    <section className={styles.ingredient_details__modal}>
        <div className={styles.ingredient__modal_header} >
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
        <button id = 'button_modal_close' onClick={() => toggleModal()} className={styles.ingredient__modal_close}></button>
        </div>
        
        <img src ={ingredient.image} style={{alignSelf:"center", width:"480px", height:"240px", backgroundCover:'no-repeat', backgroundSize:'cover'}}/>
        <p className= "text text_type_main-medium mt-4" src ={ingredient.image} style={{alignSelf:"center"}}>{ingredient.name}</p>
        
        <IngredientDetailNutrition key={ingredient._id} ingredient={ingredient}/>
      </section>
      ), 
      modalRoot
    )}};

IngredientDetails.propTypes = {
  ingredient:  PropTypes.object,
  isModalOpened: PropTypes.bool,
  toggleModal: PropTypes.func,
}; 