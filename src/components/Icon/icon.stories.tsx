import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Icon } from './index';
import { Flex, FlexItem } from '../Flex';

// Icons
import {
  ChevronRight,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Close,
  Download,
  Envelope,
  // EnvelopeFill,
  // Grid,
  // List,
  // Play,
  // PlayCircle,
  // PlayCircleFill,
  // PlayFill,
  // Plus,
  Search,
  // SocialFacebook,
  // SocialInstagram,
  // SocialLinkedin,
  // SocialTwitter,
  // SocialYoutube,
  // Upload
} from './icons';

// [TODO] Solve the "Type instantiation is excessively deep and possibly infinite." error
export const icons: { name: string; component: any }[] = [
  { name: 'ChevronRight', component: ChevronRight },
  { name: 'ArrowLeft', component: ArrowLeft },
  { name: 'ArrowLeftCircle', component: ArrowLeftCircle },
  { name: 'ArrowRight', component: ArrowRight },
  { name: 'ArrowRightCircle', component: ArrowRightCircle },
  { name: 'ChevronDown', component: ChevronDown },
  { name: 'ChevronLeft', component: ChevronLeft },
  { name: 'ChevronUp', component: ChevronUp },
  { name: 'Close', component: Close },
  { name: 'Download', component: Download },
  { name: 'Envelope', component: Envelope },
  // { name: 'EnvelopeFill', component: EnvelopeFill },
  // { name: 'Grid', component: Grid },
  // { name: 'List', component: List },
  // { name: 'Play', component: Play },
  // { name: 'PlayCircle', component: PlayCircle },
  // { name: 'PlayCircleFill', component: PlayCircleFill },
  // { name: 'PlayFill', component: PlayFill },
  // { name: 'Plus', component: Plus },
  { name: 'Search', component: Search },
  // { name: 'SocialFacebook', component: SocialFacebook },
  // { name: 'SocialInstagram', component: SocialInstagram },
  // { name: 'SocialLinkedin', component: SocialLinkedin },
  // { name: 'SocialTwitter', component: SocialTwitter },
  // { name: 'SocialYoutube', component: SocialYoutube },
  // { name: 'Upload', component: Upload },
];

storiesOf('Icon', module).add('Default', () => {
  const color = select(
    'Color',
    ['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'dark', 'medium', 'light'],
    'primary',
  );

  return (
    <ThemeProvider>
      <BaseStyles />
      <Flex wrap alignCenter>
        {icons.map((icon, index: number) => {
          const Component = icon.component;
          return (
            <FlexItem key={index} basis="10%">
              <div style={{ border: '1px solid #eee', padding: '16px', textAlign: 'center' }}>
                <Icon icon={<Component />} color={color} />
                <p style={{ textAlign: 'center', fontSize: '10px' }}>{icon.name}</p>
              </div>
            </FlexItem>
          );
        })}
      </Flex>
    </ThemeProvider>
  );
});
