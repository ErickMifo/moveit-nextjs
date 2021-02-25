import React from 'react';
import styles from '../styles/components/profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ErickMifo.png" alt="profile" />
      <div>
        <strong>Nome </strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
