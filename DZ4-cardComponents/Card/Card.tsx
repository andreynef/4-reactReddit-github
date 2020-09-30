import React from 'react';
import styles from './card.css';
import {Controls} from "./Controls";
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";

interface ICardProps {
  isSaved?: boolean;
  id?: string;
  bookmark:string;
  commentsAmount: number;
  openedThread:string;
}

export function Card({id, isSaved, commentsAmount, bookmark, openedThread}:ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent bookmark={bookmark} commentsAmount={commentsAmount}/>
      <Preview isSaved={isSaved} id={id}/>
      <Controls commentsAmount={commentsAmount} bookmark={bookmark} openedThread={openedThread}/>
    </li>
  );
}
