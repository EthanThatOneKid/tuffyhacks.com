import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import MeetTheTeamSection from '@components/meet-the-team-section';
import Layout from '@components/layout';
import { META_DESCRIPTION } from '@lib/constants';

export default function MeetTheTeam() {
  const meta = {
    title: 'TuffyHacks | Team',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <SkipNavContent />
        <MeetTheTeamSection />
      </Layout>
    </Page>
  );
}
