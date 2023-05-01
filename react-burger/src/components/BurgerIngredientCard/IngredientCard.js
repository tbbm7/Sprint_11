import styles from './IngredientCard.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react'
import IngredientDetails from "../Modals/IngredientDetails/IngredientDetails"
import PropTypes from "prop-types";


export default function IngredientCard(ingredient) {
  
  const ingridientElement = ingredient.ingredient
  const [modal, isModalOpen] = React.useState(false);

  const toggleModal = () => {
    isModalOpen(!modal);
  };

    return(
        <>
          <section  onClick = {toggleModal} className={styles.ingredient}>
          <Counter count={1} size="default" extraClass="m-1"/>
            <img src={ingridientElement.image} className={styles.ingredient__image}/>
            <div className ={`mt-2 ${styles.ingredient__price}`}>
              <p className="text text_type_digits-default mt-2">{ingridientElement.price}</p>
              <CurrencyIcon type="primary"/>
            </div>
            <p className={`text text_type_main-small mt-2 ${styles.ingredient__text}`}>{ingridientElement.name}</p>
          </section>
          { modal && <IngredientDetails key={ingridientElement._id} ingredient={ingridientElement} isModalOpened = {modal} toggleModal={toggleModal}/>}
       </>
    )
};

IngredientCard.propTypes = {
  ingredient: PropTypes.object
}; 
