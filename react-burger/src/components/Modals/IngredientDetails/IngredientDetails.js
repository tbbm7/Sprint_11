import styles from './IngredientDetails.module.css';
import IngredientDetailNutrition from '../IngredientDetails/IngredientDetailNutrition/IngredientDetailNutrition';
import { useSelector } from 'react-redux';

export default function IngredientDetails() {
  const ingredientCard = useSelector((store) => store.ingredientDetail.currentIngredient);

  return (
    <>
      <h2 className={`text text text_type_main-large" ${styles.ingredient__modal_header}`}>
        Детали ингредиента
      </h2>
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
    </>
  );
}
