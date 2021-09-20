import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import ConfContent from '@components/index';
import AboutSection from '@components/about-section';
import SponsorsSection from '@components/sponsors-section';
import FaqSection from '@components/faq-section';
import { META_DESCRIPTION } from '@lib/constants';

export default function Conf() {
  const router = useRouter();
  const { query } = router;
  const meta = {
    title: 'TuffyHacks',
    description: META_DESCRIPTION
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />
      <AboutSection />
      <SponsorsSection />
      <FaqSection />
    </Page>
  );
}
