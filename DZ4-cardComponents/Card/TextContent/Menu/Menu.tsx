import React from 'react';
import {MenuIcon} from "../../../../Icons";
import {Dropdown} from "../../../../Dropdown";
import {Text} from "../../../../Text";
import styles from './menu.css';
import {MenuItemsList} from "./MenuItemsList";

export function Menu() {
  return (
      <div className={styles.menu}>
        <Dropdown//контейнер с логикой дропа
          button={
            <button className={styles.menuButton}>
              <MenuIcon />
            </button>
          }
        >
          <div className={styles.dropdown} >
            <MenuItemsList postId={'1234'}/>
            <button className={styles.closeButton}>
              <Text size={14} mobileSize={12}>
                Закрыть
              </Text>
            </button>
          </div>
        </Dropdown>
      </div>
  );
}
