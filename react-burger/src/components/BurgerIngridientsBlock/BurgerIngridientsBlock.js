import styles from './BurgerIngridientsBlock.module.css';
import IngredientCard from '../BurgerIngredientCard/IngredientCard';
import PropTypes from 'prop-types';

export default function BurgerIngridientsBlock({
  ingredientBlockName,
  ingredientsArray,
  onClickIngredient,
}) {
  const ingredientGroupArray = ingredientsArray.filter(
    (element) => element.type === ingredientBlockName.value,
  );

  return (
    <>
      <div className="mt-10">
        <p id={ingredientBlockName.value} className="text text_type_main-medium">
          {ingredientBlockName.name}
        </p>
        <div className={styles.ingredient_block__grid}>
          {ingredientGroupArray.map((groupIngredient, index) => (
            <div key={groupIngredient._id} onClick={() => onClickIngredient(groupIngredient)}>
              <IngredientCard ingredient={groupIngredient} onClickIngredient={onClickIngredient}></IngredientCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

BurgerIngridientsBlock.propTypes = {
  ingredientBlockName: PropTypes.object,
  ingredientsArray: PropTypes.array,
  onClickIngredient: PropTypes.func
};
