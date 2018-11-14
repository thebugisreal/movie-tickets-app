import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MovieInfo extends Component {
  render() {
    const { movie } = this.props;
    return(
      <div>
        <h2 className="text-white mt-5 mb-3">{ movie.name }</h2>
        <div className="moviePage__text mb-3">
          <span className="mr-2 border text-white rounded-circle p-1">DV</span>
          <span>{ movie.cast.join(', ') }</span>
        </div>
        <div className="mb-3">
          { movie.genre.map((item, index) => 
            <span key={index} className="moviePage__genre mr-3">{item}</span>
          )}
        </div>
        <div className="moviePage__text mb-3">
          <FontAwesomeIcon className="mr-2" icon={['far', 'calendar-alt']} /> 
          <span className="mr-3 text-white">{ movie.releaseDate }</span>
          <FontAwesomeIcon className="mr-2" icon={['far', 'clock']} /> 
          <span className="mr-3 text-white">{ movie.runningTime }</span>
        </div>
        <div className="moviePage__text mb-3">
          <FontAwesomeIcon className="mr-2" icon="user-tie" /> 
          { movie.director.join(', ') }
        </div>
        <div className="moviePage__text mb-3">
          <FontAwesomeIcon className="mr-2" icon="globe-asia" /> 
          { movie.language }
        </div>
        <div className="moviePage__text mb-0 text-white">
          <b>
            {`Rated: ${ movie.rated.name } - ${ movie.rated.description }`}
          </b>
        </div>
      </div>
    )
  }
}

export default (MovieInfo);