import React from 'react';
import styles from './actions.css';
import {GarbageIcon, RemoveCrossIcon, SaveIcon, ShareIcon, StatisticIcon} from "../../../../Icons";
import {Break} from "../../../../Break";
import {GraphIcon} from "../../../../Icons/GraphIcon";

interface IActionsProps {
  openedThread: string;
  bookmark: string;
}

export function Actions({openedThread, bookmark}:IActionsProps) {
  return (
    <div className={styles.actions}>
      {openedThread==="private" ?
        <>{/* либо личный кабинет и его производные*/}

          {bookmark==='myPosts' && (
            <>
              <button>
                <StatisticIcon/>
              </button>
              <Break size={14}/>
              <button>
                <ShareIcon/>
              </button>
              <Break size={14}/>
              <button>
                <GarbageIcon/>
              </button>
            </>
          )}
          {bookmark==='saved' &&(
            <>
              <button>
                <ShareIcon/>
              </button>
              <Break size={14}/>
              <button>
                <RemoveCrossIcon/>
              </button>
            </>
          )}
          {(bookmark==='seen' || bookmark==='commented') &&(
            <>
              <button>
                <ShareIcon/>
              </button>
              <Break size={14}/>
              <button>
                <SaveIcon/>
              </button>
            </>
          )}

        </>
        :
        <>{/* либо дискуссия*/}
          <button>
            <ShareIcon/>
          </button>
          <Break size={14}/>
          <button>
            <SaveIcon/>
          </button>
        </>
      }
    </div>
  );
}
