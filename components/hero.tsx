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

import cn from 'classnames';
import { LEAF_COLORS } from '@lib/constants';
import CallToAction from './call-to-action';
import IllustrationContainer from './illustration-container';
import TuffyCamper from './illustrations/tuffy-camper';
import Tree from './illustrations/tree';
import TuffyTent from './illustrations/tuffy-tent';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION, REGISTRATION } from '@lib/constants';

export default function Hero() {
  return (
    <section className={cn(styles.wrapper)}>
      <IllustrationContainer>
        <Tree bottom="0" left="5vw" width="22.5vw" type="curvy" leafColor={LEAF_COLORS[0]} />
        <Tree bottom="0" left="25vw" width="20vw" type="round" leafColor={LEAF_COLORS[1]} />
        <Tree bottom="0" left="40vw" width="17.5vw" type="round" leafColor={LEAF_COLORS[2]} />
        <TuffyCamper bottom="0" left="15vw" width="15vw" />
        <TuffyTent bottom="0" right="0" width="37.5vw" />
      </IllustrationContainer>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-first'], styles.hero)}>
        {BRAND_NAME}
        <br className={styleUtils['show-on-desktop']} />
      </h1>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-second'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']}>•</div>
        <p>
          <strong>Online</strong>
        </p>
      </div>
      <div
        className={cn(
          styles['call-to-action-container'],
          styleUtils.appear,
          styleUtils['appear-third']
        )}
      >
        <CallToAction text="Register Now" link={REGISTRATION} />
        <CallToAction text="Learn More" link="/#about" />
      </div>
    </section>
  );
}
