import React from 'react';
import styles from './comment.css';
import {MetaData} from "../../TextContent/MetaData";


interface ICommentProps {
  commentsAmount: number;
}

export function Comment({commentsAmount}: ICommentProps) {
  return (
    <>
      <div className={styles.meta}>
        <MetaData/>
      </div>
      <p className={styles.text}>Банальные, но неопровержимые выводы, а также многие известные личности лишь добавляют фракционных разногласий и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности является качественно новой ступенью прогресса профессионального сообщества.
      </p>
      <div className={styles.more}>
        + еще {commentsAmount} ваших комментария
      </div>
    </>

  );
}
//из 15 модуля

// const Comment = props =>{//dumb component
//   return (
//     <li
//       className="listItem"
//       id={props.id}
//     >
//       <div className="listHeader">
//         <div className="listHeader__name">{props.name}</div>
//         <button
//           type="button"
//           className="listHeader__cross"
//           aria-label="удалить"
//           onClick={props.handleDelete}
//         >
//         </button>
//       </div>
//       <div className="listItem__text">{props.text}</div>
//       <div className="listItem__date">{props.date}</div>
//     </li>
//   );
// }