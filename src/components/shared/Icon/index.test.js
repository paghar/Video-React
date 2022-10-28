//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '.';
import { Secondary } from 'theme/colors';

describe('<Icon />', () => {
  it('Icon with 20px size', () => {
    const tree = renderer
      .create(
        <Icon fontSize="20px" color={Secondary.iii} iconNumber={61449}></Icon>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Icon with 12px size ', () => {
    const tree = renderer
      .create(
        <Icon fontSize="12px" color={Secondary.iv} iconNumber={61614}></Icon>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Icon with hover ', () => {
    const tree = renderer
      .create(
        <Icon
          fontSize="24px"
          color={Secondary.iv}
          hoverColor={Secondary.iii}
          iconNumber={61614}
        ></Icon>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Selectable Icon', () => {
    const tree = renderer
      .create(
        <Icon
          fontSize="24px"
          color={Secondary.iv}
          hoverColor={Secondary.iii}
          iconNumber={61614}
          selectable={true}
        ></Icon>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
