import Page from '@components/page';
import TwitchStageContainer from '@components/twitch-stage-container';
import Layout from '@components/layout';

import { Stage } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

export default function StagePage() {
  const meta = {
    title: 'TuffyHacks Event',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <TwitchStageContainer />
      </Layout>
    </Page>
  );
}
