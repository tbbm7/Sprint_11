import styles from './IngredientDetails.module.css';
import IngredientDetailNutrition from '../IngredientDetails/IngredientDetailNutrition/IngredientDetailNutrition';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

export default function IngredientDetails() {
  const ingredients = useSelector((store) => store.ingredientList.ingredients);
  const { id } = useParams();
  const ingredientCard = item();
  const location = useLocation();

  function item() {
    if (ingredients) {
      const itemOnPage = ingredients.find((item) => item._id === id);
      return itemOnPage;
    } else return null;
  }

  function setHeader() {
    if (location.state) {
      return true;
    } else {
      return false;
    }
  }

  const isModal = setHeader();

  return (
    ingredientCard && (
      <>
        <div className={styles.ingredient__block}>
          {isModal && (
            <h2
              className={`text text text_type_main-large" ${styles.ingredient__modal_header_modal}`}>
              Детали ингредиента
            </h2>
          )}
          {!isModal && (
            <h2 className={`text text text_type_main-large" ${styles.ingredient__modal_header}`}>
              Детали ингредиента
            </h2>
          )}
          <img
            src={ingredientCard.image}
            className={styles.ingredient__modal_img}
            alt={ingredientCard.name}
          />
          <p
            className={`text text_type_main-medium mt-4" ${styles.ingredient__modal_text}`}
            src={ingredientCard.image}>
            {ingredientCard.name}
          </p>
          <IngredientDetailNutrition ingredient={ingredientCard} />
        </div>
      </>
    )
  );
}
