import React from 'react';

import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import styles from './media.module.css';

export const Media = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.listUl}>
        <li className={styles.listItem}>
          <a 
            className={styles.borderContent}
            href="https://twitter.com/tiago_m13?t=6_WRUkRN76smFLSpvYiyQg&s=08"
            target="_blank"
            rel="noopener"
          >
            <FaTwitter size={20} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a 
            className={styles.borderContent}
            href="https://www.instagram.com/tiagomota_13?r=nametag" 
            target="_blank"
            rel="noopener"
          >
            <FaInstagram size={20} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a 
            className={styles.borderContent}
            href="https://www.linkedin.com/in/tiago-mota-4690591a8/" 
            target="_blank"
            rel="noopener"
          >
            <FaLinkedinIn size={20} />
          </a>
        </li>
        <li className={styles.listItem}>
          <a 
            className={styles.borderContent}
            href="https://github.com/TiagoM13" 
            target="_blank"
            rel="noopener"
          >
            <FaGithub size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
}
