import cn from 'classnames';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { parseISO, format, isBefore, isAfter } from 'date-fns';
import { Speaker, Talk } from '@lib/types';
import styles from './talk-card.module.css';

type Props = {
  key: string;
  talk: Talk;
  showTime: boolean;
};

const formatDate = (date: string) => {
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};

const createNotification = async (timestamp: number) => {
  if ('serviceWorker' in navigator && 'showTrigger' in Notification.prototype) {
    const registration = await navigator.serviceWorker.getRegistration();
    Notification.requestPermission().then(permission => {
      if (permission !== 'granted') {
        alert('you need to allow push notifications');
      } else if (registration !== undefined) {
        registration.showNotification('Demo Push Notification', {
          tag: timestamp.toString(), // a unique ID
          body: 'Hello World', // content of the push notification
          // @ts-ignore
          showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
          data: {
            url: window.location.href // pass the current url to the notification
          },
          badge: '/assets/android-chrome-512x512.png',
          icon: '/assets/android-chrome-192x192.png'
        });
      }
    });
  } else {
    alert('Unfortunately your browser does not support notifications.');
  }
};

export default function TalkCard({ talk: { title, speaker, start, end }, showTime }: Props) {
  const [isTalkLive, setIsTalkLive] = useState(false);
  const [startAndEndTime, setStartAndEndTime] = useState('');

  useEffect(() => {
    const now = Date.now();
    setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  }, []);

  return (
    <div key={title} className={styles.talk}>
      {showTime && <p className={styles.time}>{startAndEndTime || <>&nbsp;</>}</p>}
      <a
        className={cn(styles.card, {
          [styles['is-live']]: isTalkLive
        })}
        onClick={() => createNotification(new Date(start).valueOf() - 60e3)}
      >
        <div className={styles['card-body']}>
          <h4 title={title} className={styles.title}>
            {title}
          </h4>
        </div>
      </a>
    </div>
  );
}

const SpeakerDetails = ({ speaker }: { speaker: Speaker[] }) => (
  <div className={styles.speaker}>
    <div className={styles['avatar-group']}>
      {speaker.map(s => (
        <div key={s.name} className={styles['avatar-wrapper']}>
          <Image
            loading="lazy"
            alt={s.name}
            className={styles.avatar}
            src={s.image.url}
            title={s.name}
            width={24}
            height={24}
          />
        </div>
      ))}
    </div>
    <h5 className={styles.name}>
      {speaker.length === 1 ? speaker[0].name : `${speaker.length} speakers`}
    </h5>
  </div>
);
