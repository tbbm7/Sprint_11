import styles from './BurgerConstructorBlock.module.css';
import { ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function BurgerConstructorBlock({
  text,
  price,
  thumbnail,
  type,
  isLocked
  }
  ) {
   return (
    <>
    <li  className={styles.constructor__column}>
      <div>
            { !type && <DragIcon type="primary"/> }
      </div >
      <div className={styles.constructor__element}>
      <ConstructorElement 
            type={type}
            isLocked={isLocked}
            text={text}
            price={price}
            thumbnail={thumbnail}
          />
        </div>
    </li>
    </>
   )
};

BurgerConstructorBlock.propTypes = {
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
}; 
