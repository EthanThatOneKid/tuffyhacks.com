import Page from '@components/page';
import EventContent from '@components/event-content';
import Layout from '@components/layout';
import { META_DESCRIPTION } from '@lib/constants';

export default function StagePage() {
  const meta = {
    title: 'TuffyHacks Event',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <EventContent />
      </Layout>
    </Page>
  );
}
