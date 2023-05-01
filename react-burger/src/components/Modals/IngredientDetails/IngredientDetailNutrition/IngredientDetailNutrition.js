import styles from './IngredientDetailNutrition.module.css'


export default function IngredientDetailNutrition({ingredient}) {
    const ingredientCompositionArray = [
        { name:'Калории,ккал',
        value: ingredient.calories},
        { name: 'Белки, г', 
        value: ingredient.proteins}, 
        { name: 'Жиры, г',
        value: ingredient.fat},
        { name: 'Углеводы, г', 
        value: ingredient.carbohydrates}
     ];

   return (
    <div className={styles.ingredient__nutrition}>
        {ingredientCompositionArray.map( type =>
            <div className={styles.ingredient__nutrition_element}>  
            <p className="text text_type_main-default text_color_inactive">{type.name}</p>
            <p  className="text text_type_digits-default text_color_inactive mt-2">{type.value}</p>
           </div>
        )}
   </div>
 )
}