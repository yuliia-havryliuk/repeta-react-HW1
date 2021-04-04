import React from 'react';
import style from './Contacts.module.css';
import { IoMdCloseCircle } from 'react-icons/io';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={style.container}>
      <h3>Contacts:</h3>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.liItem}>
          <div>
            <span>{name}</span> : {number}
          </div>
          <button
            type="button"
            className={style.deleteBtn}
            onClick={() => {
              deleteContact(id);
            }}
          >
            <IoMdCloseCircle className={style.icon} />
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Contacts;
