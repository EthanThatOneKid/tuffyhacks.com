/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import ConfContent from '@components/index';
import AboutSection from '@components/about-section';
import SponsorsSection from '@components/sponsors-section';
import FaqSection from '@components/faq-section';
import { META_DESCRIPTION } from '@lib/constants';
import { scrollTo } from '@lib/smooth-scroll';

export default function Conf() {
  const router = useRouter();
  const { query } = router;
  const meta = {
    title: 'TuffyHacks 2021',
    description: META_DESCRIPTION
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  /* Smooth Scrolling Attempt
  const aboutSectionContainerRef = useRef<HTMLDivElement>(null);
  const sponsorsSectionContainerRef = useRef<HTMLDivElement>(null);
  const faqSectionContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const targetRef =
        url === '/#about'
          ? aboutSectionContainerRef
          : url === '/#sponsors'
          ? sponsorsSectionContainerRef
          : url === '/#faq'
          ? faqSectionContainerRef
          : undefined;
      if (targetRef !== undefined) {
        console.log({ url, targetRef });
        scrollTo(targetRef.current as HTMLElement);
      }
    };
    router.events.on('hashChangeStart', handleRouteChange);
    return () => {
      router.events.off('hashChangeStart', handleRouteChange);
    };
  }, []);
  */

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
