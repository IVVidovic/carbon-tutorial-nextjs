'use client';

import { Content, Theme } from '@carbon/react';
import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

export function Providers({ children }) {
  return (
    <div>
      <div>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
      </div>
      <Content>{children}</Content>
    </div>
  );
}
