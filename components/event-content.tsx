import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './event-content.module.css';
import Countdown from 'react-countdown';
import React from 'react';
import CallToAction from './call-to-action';
import CountdownFormat from './countdown-format';
import { EVENT_DATE } from '@lib/constants';

export default function EventContent() {
  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.hero)}>
        <h1 className={cn(styleUtils.appear, styleUtils['appear-first'], styles['hero-title'])}>
          TuffyHacks
        </h1>
        <div
          className={cn(
            styles['countdown-container'],
            styleUtils.appear,
            styleUtils['appear-second']
          )}
        >
          <Countdown date={EVENT_DATE} renderer={CountdownFormat} />
        </div>
        <div
          className={cn(
            styles['call-to-action-container'],
            styleUtils.appear,
            styleUtils['appear-second']
          )}
        >
          <CallToAction text="Head to Main Stage" link="/event/stage" classes={[]} />
        </div>
      </div>
    </div>
  );
}
