import React from 'react';
import styles from './Menu.module.scss';
import { Link } from 'react-scroll';
import { itemsMenu } from './data';

type MenuProps = {
  onClick?: () => void;
};

const Menu = ({ onClick }: MenuProps) => {
  return (
    <ul>
      {itemsMenu.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={styles.item}
              onClick={onClick}
              to={item.href}
              smooth={true}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
