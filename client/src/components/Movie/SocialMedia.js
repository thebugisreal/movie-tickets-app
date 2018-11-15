import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return(
    <div>
      <div className="text-white mb-2 d-inline-block">SOCIAL MEDIA</div>
      <ul className="mt-1 mb-4">
        <li className="moviePage__social d-inline-flex justify-content-center align-items-center rounded-circle mr-2">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </li>
        <li className="moviePage__social d-inline-flex justify-content-center align-items-center rounded-circle mr-2">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </li>
        <li className="moviePage__social d-inline-flex justify-content-center align-items-center rounded-circle mr-2">
          <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
        </li>
        <li className="moviePage__social d-inline-flex justify-content-center align-items-center rounded-circle mr-2">
          <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
        </li>
      </ul>
    </div>
  )
}