import React from 'react';
import styles from './commentsbutton.css';
import {CommentIcon} from "../../../../Icons";
import {Break} from "../../../../Break";
import {Dropdown} from "../../../../Dropdown";
import {Comment} from "../Comment";

interface ICommentButtonProps {
  bookmark:string;
  commentsAmount: number;

}

export function CommentsButton({bookmark, commentsAmount}:ICommentButtonProps) {
  return (
    <div className={styles.commentsButtonContainer}>
      <Dropdown isInline
        button={
          <button className={styles.commentsButton}>
            <CommentIcon/>
            <Break size={4}/>
            {bookmark==='commented' ? <span>Комментарий</span> : <span>{commentsAmount}</span>}
          </button>
        }
      >
        <div className={styles.commentsDropdown}>
          <Comment commentsAmount={commentsAmount}/>
        </div>
      </Dropdown>
    </div>
  );
}
