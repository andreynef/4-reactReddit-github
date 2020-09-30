import React from 'react';
import styles from './textcontent.css';
import {MetaData} from "./MetaData";
import {ActionsContent} from "./ActionsContent";
import {Menu} from "./Menu";

interface ITextContentProps {
  bookmark: string,
  commentsAmount:number;
}

export function TextContent({bookmark, commentsAmount}:ITextContentProps) {
  return (
    <div className={styles.textContentContainer}>
      <div className={styles.metaMenuContainer}>
        <MetaData/>
        <Menu/>
      </div>
      <h2 className={styles.titleContainer}>
        <a href="#post-url">
          Реализация намеченных плановых заданий
        </a>
      </h2>
      <ActionsContent bookmark={bookmark} commentsAmount={commentsAmount}/>
    </div>
  );
}
