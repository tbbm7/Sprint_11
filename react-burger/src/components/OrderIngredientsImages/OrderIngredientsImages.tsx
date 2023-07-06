import { FC } from 'react';
import style from './OrderIngredientsImages.module.css';
import { IOrderIngredientsList } from '../../services/types/data';


const OrderIngredientsImages: FC<IOrderIngredientsList> = ({ ingredients }) => {
  const isCounterVisible: any = () => {
    if (ingredients.length - 6 === 0) {
      return false;
    } else {
      return true;
    }
  };
  const length = ingredients.length;

  return (
    <ul className={style.order_img__list}>
      {ingredients.map((ingredient, index) => {
        if (index < 5) {
          return (
            <li key={index} className={style.order_img__element} style={{ zIndex: 15 - index }}>
              <img
                className={style.order_img__image}
                src={ingredient.image_mobile}
                alt={ingredient.name}
              />
            </li>
          );
        } else if (index === 5) {
          return (
            <li key={index} className={style.order_img__element} style={{ zIndex: 15 - index }}>
              <img
                className={style.order_img__image}
                src={ingredient.image_mobile}
                alt={ingredient.name}
              />
              {isCounterVisible && (
                <p className={`text text_type_main-default ${style.order_img__text}`}>{`+${
                  length - 6
                }`}</p>
              )}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default OrderIngredientsImages;
