import React from 'react';
import styles from './karmacounter.css';
import {ArrowFilledIcon} from "../../../../Icons";
import {Break} from "../../../../Break";

export function KarmaCounter() {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <ArrowFilledIcon/>
      </button>
      <Break size={8} inline/>
      <span className={styles.karmaValue}>234</span>
      <Break size={8} inline/>
      <button className={styles.down}>
        <ArrowFilledIcon/>
      </button>
    </div>
  );
}
