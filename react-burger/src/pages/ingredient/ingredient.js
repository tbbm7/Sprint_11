import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/Modals/IngredientDetails/IngredientDetails';
import { useSelector } from 'react-redux';

export default function IngredientPage() {
  const ingredients = useSelector((store) => store.ingredientList.ingredients);
  const { id } = useParams();

  function item() {
    if (ingredients) {
      const itemOnPage = ingredients.find((item) => item._id === id);
      return itemOnPage;
    } else return null;
  }

  const ingredientCard = item();

  return (
    ingredientCard !== null && (
      <>
        <div className={'mt-30'}>
          <IngredientDetails />
        </div>
      </>
    )
  );
}
