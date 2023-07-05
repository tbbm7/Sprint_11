import styles from './BurgerConstructor.module.css';
import BurgerConstructorBlock from '../BurgerConstructorBlock/BurgerConstructorBlock';
import BurgerTotalBlock from '../BurgerTotalBlock/BurgerTotalBlock';
import {addIngredient} from '../../services/actions/constructor'
import { useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import {  FC } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { IIngredient } from '../../services/types/data';

const BurgerConstructor: FC = () => {
  const ingredients = useSelector((store) => store.constructorList);
  const burgerFillingStore = ingredients.fillings;
  const bunStore = ingredients.bun;

  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredient : IIngredient) {
      dispatch(addIngredient( uuidv4(), ingredient));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const burgerFillingPrice = useMemo(() => {
    return burgerFillingStore.reduce((sum, item) => sum + item.price, 0);
  }, [burgerFillingStore]);

  const burgerbunPrice = useMemo(() => {
    return bunStore === null ? 0 : bunStore.price * 2;
  }, [bunStore]);

  const totalPrice = useMemo(() => {
    return bunStore === null ? burgerFillingPrice : burgerbunPrice + burgerFillingPrice;
  }, [burgerbunPrice, burgerFillingPrice, bunStore]);

  const borderColor = isHover ? 'lightblue' : 'transparent';

  return (
    <div className={styles.constructor} ref={dropTarget}  style={{ borderColor }}>
      {bunStore !== null && (
        <BurgerConstructorBlock
          type="top"
          text={`${bunStore.name} (верх)`}
          price={bunStore.price}
          thumbnail={bunStore.image}
          id={bunStore._id}
          isLocked={true}
        />
      )}
      {burgerFillingStore !== undefined && (
      <ul className={styles.constructor__list}>
        {burgerFillingStore.map((filling, index) => (
          <BurgerConstructorBlock
            key={filling.ingredientUniqId}
            index={index}
            ingredientCard={filling}
            text={filling.name}
            price={filling.price}
            thumbnail={filling.image}
            id={filling._id}
            ingredientUniqId={filling.ingredientUniqId}
            isLocked={false}
          />
        ))}
      </ul>)
      }
      {bunStore !== null && (
        <BurgerConstructorBlock
          type="bottom"
          text={`${bunStore.name} (низ)`}
          price={bunStore.price}
          thumbnail={bunStore.image}
          isLocked={true}
          id={bunStore._id}
        />
      )}
      {totalPrice !== 0 && <BurgerTotalBlock totalPrice={totalPrice} ingredients={ingredients} />}
    </div>
  );
}

export default BurgerConstructor;