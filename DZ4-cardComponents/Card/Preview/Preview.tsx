import React from 'react';
import styles from './preview.css';
import {ArrowFilledIcon, SaveIcon} from "../../../Icons";
import {Break} from "../../../Break";
import {Text} from "../../../Text";

interface PreviewProps {
  isSaved?: boolean;
  id?: string;
}

export function Preview({isSaved}:PreviewProps) {
  return (
    <div className={styles.previewContainer}>
      <img className={styles.previewImg}
           src={'https://i.pinimg.com/originals/fd/a9/ec/fda9ec08daa846f974323a22ee0b48ea.jpg'}
           alt={'previewPic'}
      />
      {isSaved &&
        <div  className={styles.marker}>
          <div className={styles.markerPartOne}>
            <SaveIcon/>
            <Break size={4}/>
            <Text size={10}>Сохраненное</Text>
          </div>
          <div className={styles.markerPartTwo}>
            <ArrowFilledIcon/>
          </div>
        </div>
      }
    </div>
  );
}
