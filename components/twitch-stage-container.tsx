// Reference: https://github.com/frozencure/twitch-player#readme

import { useEffect } from 'react';
import cn from 'classnames';
import { Stage } from '@lib/types';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import ScheduleSidebar from './schedule-sidebar';
import { TwitchEmbed } from 'react-twitch-embed';

type Props = {
  stage: Stage;
  allStages: Stage[];
};

export default function TwitchStageContainer({ allStages }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>
          <TwitchEmbed channel="rwxrob" />
          {/* <iframe
            allow="autoplay; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            src={`https://embed.twitch.tv/rwxrob?autoplay=1&mute=1`}
            title={'stageName'}
            width="100%"
          /> */}
          <div className={cn(styles.bottom, styleUtils.appear, styleUtils['appear-second'])}>
            <div className={styles.messageContainer}>
              <h2 className={styles.stageName}>main stage</h2>
            </div>
          </div>
        </div>
        )
      </div>
      <ScheduleSidebar allStages={allStages} />
    </div>
  );
}
