import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <h3 className={style.title}>
      Find contacts by name:
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        placeholder="Enter a letter..."
      />
    </h3>
  );
};
export default Filter;
