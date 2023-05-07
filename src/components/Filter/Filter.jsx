import React from 'react';
import { FilterContainer, FilterInput } from './Filter.styled'

const Filter = ({ value, onChange }) => (
  <FilterContainer  htmlFor="">
    Finde coctacts by name
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterContainer>
);

export default Filter;
