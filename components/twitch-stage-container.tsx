import cn from 'classnames';
import { stages as allStages } from '@lib/cms-providers/in-memory/stages';
import { EVENT_DATE, TWITCH_CHANNEL } from '@lib/constants';
import styles from './stage-container.module.css';
import ScheduleSidebar from './schedule-sidebar';
import { TwitchEmbed } from 'react-twitch-embed'; // https://github.com/moonstar-x/react-twitch-embed#readme
import Countdown from 'react-countdown';
import CountdownFormat from './countdown-format';
import { useState } from 'react';
import styleUtils from './utils.module.css';

type Props = {};

export default function TwitchStageContainer({}: Props) {
  const [isStarting, setIsStarting] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        <div className={cn(styles.stream)}>
          {isStarting ? (
            <TwitchEmbed
              channel={TWITCH_CHANNEL}
              auto
              allowFullscreen={true}
              theme="dark"
              width="100%"
              height="100%"
              autoplay={true}
            />
          ) : (
            <div className={cn(styleUtils.appear, styleUtils['appear-second'])}>
              <Countdown
                date={EVENT_DATE}
                renderer={CountdownFormat}
                onComplete={() => setIsStarting(true)}
              />
            </div>
          )}
        </div>
      </div>
      <ScheduleSidebar allStages={allStages} />
    </div>
  );
}
