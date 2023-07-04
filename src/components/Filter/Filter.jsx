import React from 'react';


import { FilterContainer, FilterInput } from './Filter.styled';


const Filter = () => {

  return (
    <FilterContainer>
      Find contacts by name:
      <br />
      <FilterInput
        type="text"
        value
        onChange
        placeholder="search..."
      />
    </FilterContainer>
  );
};

export default Filter;
