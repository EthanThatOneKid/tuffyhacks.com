import { useState, useEffect } from 'react';
import { Stage } from '@lib/types';
import styles from './schedule-sidebar.module.css';
import TalkCard from './talk-card';

type Props = {
  allStages: Stage[];
};

export default function ScheduleSidebar({ allStages }: Props) {
  const [currentStage, setCurrentStage] = useState<Stage>(allStages[0]);

  const refreshSchedule = () => {
    const now = new Date();
    setCurrentStage({
      ...currentStage,
      schedule: currentStage.schedule.filter(({ end }) => {
        return new Date(end) > now;
      })
    });
  };

  useEffect(() => {
    refreshSchedule();
    const now = new Date();
    const timeoutIDs: NodeJS.Timeout[] = [];
    for (const { end } of currentStage.schedule) {
      const timeout = new Date(end).valueOf() - now.valueOf();
      const id = setTimeout(refreshSchedule, timeout);
      timeoutIDs.push(id);
    }
    return () => timeoutIDs.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.schedule}>
      <h3 className={styles.header}>Schedule</h3>
      <div className={styles.talks}>
        {currentStage?.schedule.map(talk => (
          <TalkCard key={talk.title} talk={talk} showTime />
        ))}
      </div>
    </div>
  );
}
