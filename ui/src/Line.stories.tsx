import React from 'react';

import { storiesOf } from '@storybook/react';
import { Line } from './Line';

storiesOf('Line', module).add('all', () => <Line thickness="base" />);
