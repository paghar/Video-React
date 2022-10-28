//@flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Title1,
  Display1,
  Display2,
  Display3,
  Display4,
  Display5,
  Display6,
} from 'theme/fonts';
import Typography from '.';

storiesOf('Typography', module)
  .add('Title1', () => (
    <Typography font={Title1} hoverable color="red">
      Title 1
    </Typography>
  ))
  .add('Display1', () => (
    <Typography font={Display1} color="red">
      Display 1
    </Typography>
  ))
  .add('Display2', () => (
    <Typography font={Display2} color="green">
      Display 2
    </Typography>
  ))
  .add('Display3', () => (
    <Typography font={Display3} color="black">
      Display 3
    </Typography>
  ))
  .add('Display4', () => (
    <Typography font={Display4} color="red">
      Display 4
    </Typography>
  ))
  .add('Display5', () => (
    <Typography font={Display5} color="red">
      Display 5
    </Typography>
  ))
  .add('Display6', () => (
    <Typography font={Display6} color="red">
      Display 6
    </Typography>
  ));
