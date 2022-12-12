import React from 'react';

import Button from './Button';


const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} onClick={onAdd}/>
        {/* This is the act of reusing component with props
        <Button color="green" text="Add"/>
        <Button color="orange" text="Add7"/>
        <Button color="ash" text="Add4"/> */}
      </header>
    </div>
  );
};

export default Header;