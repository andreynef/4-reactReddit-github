import React from 'react';
import styles from './menuitemslist.css';
import {BlockIcon, CommentIcon, SaveIcon, ShareIcon, WarningIcon} from "../../../../../Icons";
import {Text} from "../../../../../Text";
import {Break} from "../../../../../Break";

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({postId}:IMenuItemsListProps) {//postid нужен для того чтобы при нажатии кнопок дать АПИ знать, что именно скрывать а что блокировать.
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={()=>console.log('Button has been pressed')}>
        <CommentIcon />
        <Break size={4}/>
        <Text size={12}>Комментарии</Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem} onClick={()=>console.log('Button has been pressed')}>
        <ShareIcon />
        <Break size={4}/>
        <Text size={12}>Поделиться</Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem} onClick={()=>console.log('postId: '+ postId + ' .Button has been pressed')}>
        <BlockIcon />
        <Break size={4}/>
        <Text size={12}>Скрыть</Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem} onClick={()=>console.log('Button has been pressed')}>
        <SaveIcon />
        <Break size={4}/>
        <Text size={12}>Сохранить</Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem} onClick={()=>console.log('Button has been pressed')}>
        <WarningIcon />
        <Break size={4}/>
        <Text size={12}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
