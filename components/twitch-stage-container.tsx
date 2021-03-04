import cn from 'classnames';
import { stages as allStages } from '@lib/cms-providers/in-memory/stages';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import ScheduleSidebar from './schedule-sidebar';
import { TwitchEmbed } from 'react-twitch-embed'; // https://github.com/moonstar-x/react-twitch-embed#readme

type Props = {};

export default function TwitchStageContainer({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>
          <TwitchEmbed
            channel="rwxrob"
            allowFullscreen={true}
            theme="dark"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <ScheduleSidebar allStages={allStages} />
    </div>
  );
}
