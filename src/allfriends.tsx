import React from 'react';
import contacts  from './contacts.js';
import {Friends}  from './friends.js';

export const AllFriends = () => {
  return (
    <section>
      {contacts.map((contact) => {
        return <Friends {...contact} />;
      })}
    </section>
  );
};
