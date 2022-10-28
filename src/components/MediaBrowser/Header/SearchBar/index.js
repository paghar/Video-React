// @flow
import React, { useState } from 'react';
import Input from 'components/shared/Input';
import { Display3 } from 'theme/fonts';
import { Generals } from 'theme/colors';

type Props = {
  className?: string,
};

const SearchBar = ({ className }: Props) => {
  const [searchIcon, setSearchIcon] = useState('61442');
  const [searchValue, setSearchValue] = useState('');
  const onInputChanged = event => {
    const {
      target: { value: inputValue },
    } = event;
    setSearchValue(inputValue);
    if (inputValue) {
      setSearchIcon('61453');
    } else {
      setSearchIcon('61442');
    }
  };
  const purgeSearch = () => {
    setSearchIcon('61442');
    setSearchValue('');
  };

  return (
    <Input
      height="31px"
      width="223px"
      font={Display3}
      borderRadius="40px"
      textColor={Generals.vii}
      backgroundColor={Generals.iv}
      hoverBackgroundColor={Generals.iv}
      placeholder="Search here..."
      placeHolderColor={Generals.vi}
      icon={searchIcon}
      iconColor={Generals.vii}
      iconSize="15px"
      paddingRL="14px"
      className={className}
      changed={onInputChanged}
      iconClicked={purgeSearch}
      value={searchValue}
    />
  );
};

export default SearchBar;
