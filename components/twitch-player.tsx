// Reference: https://github.com/frozencure/twitch-player#readme
// To-do: Just make a replica of `stage-container.tsx` but with a Twitch stream instead of YouTube.

import { useEffect } from 'react';
import { TwitchEmbed, TwitchEmbedLayout } from 'twitch-player';

const playerClassName = 'twitch-player-container';

export default function TwitchPlayer() {
  useEffect(() => {
    const embed = new TwitchEmbed('twitch-player', {
      width: 1280,
      height: 720,
      channel: '<channel ID here>',
      layout: TwitchEmbedLayout.VIDEO_WITH_CHAT
    });
    console.log({ embed });
  }, []);
  return <div className={playerClassName}></div>;
}
