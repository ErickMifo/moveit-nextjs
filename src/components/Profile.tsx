import React, { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ErickMifo.png" alt="profile" />
      <div>
        <strong>Nome </strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level
          {' '}
          {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
