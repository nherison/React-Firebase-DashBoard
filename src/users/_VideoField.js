import React from 'react';
import { Player } from 'video-react';

const _VideoField = ({record=[], source}) => {
  return (
      <Player
        playsInline
        src= {record[source]}
        fluid={false}
        width={840}
        height={680}
        />
  );
};

export default _VideoField;