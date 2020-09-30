import React from 'react';
import {
  AyeIcon,
  GarbageIcon,
  RemoveCrossIcon,
  ShareIcon,
  StatisticIcon
} from "../../../../Icons";
import {Text} from "../../../../Text";
import {Break} from "../../../../Break";
import {EColors} from "../../../../../utils/enums/EColors";
import styles from "./actionsContent.css";
import {CommentsButton} from "../../Controls/CommentsButton";

interface ITextContentProps {
  bookmark: string;
  commentsAmount: number;
}

export function ActionsContent({bookmark, commentsAmount}:ITextContentProps) {
  return (
    <div className={styles.actionsContentContainer}>
      {bookmark === 'seen' &&(
        <button className={styles.buttonSeen}>
          <div>
            <AyeIcon/>
            <Break size={4} inline/>
            <Text size={10} color={EColors.gray99} tabletSize={14}>3 часа назад</Text>
          </div>
        </button>
      )}
      {bookmark === 'saved' &&(
          <button>
            <RemoveCrossIcon/>
            <Break size={4} inline/>
            <Text size={10} color={EColors.gray99} tabletSize={14}>Убрать из списка</Text>
          </button>
      )}
      {bookmark === 'myPosts' &&(
        <>
          <button>
            <StatisticIcon/>
            <Break size={8} inline/>
            <Text size={10} color={EColors.gray99} tabletSize={14}>Статистика публикации</Text>
          </button>
          <Break size={8} inline/>
          <button>
            <ShareIcon/>
            <Break size={8} inline/>
            <Text size={10} color={EColors.gray99} tabletSize={14}>Поделиться</Text>
          </button>
          <Break size={8} inline/>
          <button>
            <GarbageIcon/>
            <Break size={8} inline/>
            <Text size={10} color={EColors.gray99} tabletSize={14}>Удалить</Text>
          </button>
        </>
      )}
      {bookmark === 'commented' &&(
        <div className={styles.actionCommentContainer}>
          <CommentsButton bookmark={bookmark} commentsAmount={commentsAmount}/>
        </div>
      )}
    </div>
  );
}
