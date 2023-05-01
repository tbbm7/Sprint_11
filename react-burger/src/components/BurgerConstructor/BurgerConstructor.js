import styles from './BurgerConstructor.module.css';
import BurgerConstructorBlock from '../BurgerConstructorBlock/BurgerConstructorBlock'
import BurgerTotalBlock from '../BurgerTotalBlock/BurgerTotalBlock'
import PropTypes from "prop-types";

export default function BurgerConstructor( { data }) {
  const burgerFilling = data.filter(element => element.type === 'main');
  const burgerbun  = data.filter(element => element.type === 'bun');

    return (
        <section className={styles.constructor}>
            {burgerbun.length>1 && 
            <BurgerConstructorBlock
              key = {burgerbun[0]._id}
              type="top"
              text={burgerbun[0].name}
              price = {burgerbun[0].price}
              thumbnail = {burgerbun[0].image}
              isLocked={true}
            />}
          <ul className={styles.constructor__list}>
            {burgerFilling.map( filling =>
              <BurgerConstructorBlock
                key = {filling._id}
                text={filling.name}
                price = {filling.price}
                thumbnail = {filling.image}
                isLocked={true}
              />
            )}
          </ul>
            {burgerbun.length>1 && 
            <BurgerConstructorBlock
              key = {burgerbun[1]._id}
              type="bottom"
              text={burgerbun[1].name}
              price = {burgerbun[1].price}
              thumbnail = {burgerbun[1].image}
              isLocked={true}
              />}
            <BurgerTotalBlock/>
        </section>
      )
};

BurgerConstructor.propTypes = {
  data: PropTypes.array
}; 

