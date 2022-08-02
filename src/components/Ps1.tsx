import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-pink dark:text-dark-lblue">
        {config.ps1_username}
      </span>
      <span className="text-light-yellow dark:text-dark-yellow">@</span>
      <span className="text-light-pink dark:text-dark-pink">
        {config.ps1_hostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
