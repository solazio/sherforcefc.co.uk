import React from "react";
import { mean } from "lodash";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const PlayerCard = (props) => {
  const { player } = props;
  const { manager } = props;
  const overallAtt = Math.round(mean(Object.values(player.attributes)));
  const getAge = (birthDate) => {
    const today = new Date();
    return birthDate
      ? Math.floor((today - new Date(birthDate)) / (1000 * 60 * 60 * 24 * 365))
      : "?";
  };
  return (
    <div className='card player-bio'>
      <div className='card-image-container'>
        <PreviewCompatibleImage
          imageInfo={player.image}
          alt=''
          immageClass='card-image'
        />
        {manager && (
          <div className='manager-chip tag is-danger is-size-6'>Manager</div>
        )}
        <div className='info-position'>
          <i className={`p-icon-flag--${player.country.toLowerCase()}`}></i>
          {/* <div className='is-size-1'>{overallAtt}</div> */}
          <div className='is-size-4'>{player.position}</div>
        </div>
      </div>
      <div className='card-content pt-5'>
        <div className='title'>
          <p className='is-size-4'>{player.nickName}</p>
          <p className='is-size-7 pt-3 has-text-grey'>{player.name}</p>
        </div>
        {/* TO DO - add social media link */}
        {/* <p className='subtitle is-6'>@johnsmith</p> */}
        <ul className='divided-list'>
          <li className='divided-list__item'>
            <span className='tag'>Preffered foot</span>
            <span className='tag is-danger is-pulled-right'>{player.foot}</span>
          </li>
          <li className='divided-list__item'>
            <span className='tag'>Height</span>
            <span className='tag is-danger is-pulled-right'>
              {player.height} cm
            </span>
          </li>
          <li className='divided-list__item'>
            <span className='tag'>Weight</span>
            <span className='tag is-danger is-pulled-right'>
              {player.weight} kg
            </span>
          </li>
          <li className='divided-list__item'>
            <span className='tag'>Age</span>
            <span className='tag is-danger is-pulled-right'>
              {getAge(player.birthDate)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerCard;
