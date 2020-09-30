import React from 'react';
import styles from './metadata.css';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src="https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg"
          alt="avatar"
        />
        <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
      </div>
      <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>
              опубликовано
            </span>
            4 часа назад
      </span>
    </div>
  );
}
