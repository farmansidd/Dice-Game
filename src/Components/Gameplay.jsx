import React from 'react';
import Score from './Score';
import BackHome from './BackHome';

function Gameplay({ toggle }) {
  return (
    <div>
      <BackHome toggle={toggle} />
      <Score />
    </div>
  );
}

export default Gameplay;
