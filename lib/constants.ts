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

export const SITE_URL = 'https://tuffyhacks.com/';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'tuffyhacks';
export const BRAND_NAME = 'TuffyHacks';
export const SITE_NAME_MULTILINE = ['TuffyHacks'];
export const SITE_NAME = 'TuffyHacks';
export const META_DESCRIPTION = 'Welcome to TuffyHacks!';
export const SITE_DESCRIPTION = 'Welcome to TuffyHacks!';
export const DATE = 'March 27-28, 2021';
export const SHORT_DATE = 'Mar 27 - 9:00am PST';
export const FULL_DATE = 'Mar 27th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT = undefined;
export const EVENT_DATE = 'Sat Mar 27 2021 11:00:00 GMT-0700 (Pacific Daylight Time)';
export const EMAIL = 'mailto: info@tuffyhacks.com';
export const REPO = 'https://github.com/EthanThatOneKid/tuffyhacks.com';
export const REGISTRATION = 'https://tinyurl.com/tuffyhacks2021-app';
export const SPONSORSHIP = 'https://tinyurl.com/tuffyhacks-sponsorship';
export const SAMPLE_TICKET_NUMBER = 1234;
export const TWITCH_CHANNEL = 'tuffyhacks';
export const NAVIGATION = [
  {
    name: 'About',
    route: '/#about'
  },
  {
    name: 'Sponsors',
    route: '/#sponsors'
  },
  {
    name: 'FAQ',
    route: '/#faq'
  }
  // {
  //   name: 'Event',
  //   route: '/event'
  // }
];

export const LEAF_COLORS = ['#94a71c', '#b1c046', '#767d3a', '#7B8A1C'];

export type TicketGenerationState = 'default' | 'loading';
