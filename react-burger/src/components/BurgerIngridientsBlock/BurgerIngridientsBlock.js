import styles from './BurgerIngridientsBlock.module.css'
import IngredientCard from "../BurgerIngredientCard/IngredientCard"
import PropTypes from "prop-types";

export default function IngridientsBlock({ 
    ingredientBlockName,
    ingredientsArray
    }) {
    const ingredientGroupArray = ingredientsArray.filter(element => element.type === ingredientBlockName.value);
     return (
        <section className="mt-10">
          <li id = {ingredientBlockName.value} className="text text_type_main-medium">{ingredientBlockName.name}</li>
          <div className={styles.ingredient_block__grid}>
          {ingredientGroupArray.map( groupIngredient =>
            <IngredientCard 
            key={groupIngredient.name}
            ingredient={groupIngredient}></IngredientCard>
        )}
          </div>
        </section> 
     )
 };

IngridientsBlock.propTypes = {
  ingredientBlockName: PropTypes.object,
  ingredientsArray: PropTypes.array,
};
