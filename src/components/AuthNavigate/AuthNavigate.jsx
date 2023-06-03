import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthNavigate.module.css';

const AuthNavigate = ({ route, title }) => {
  return (
    <Link to={route} className={styles.link}>
      {title}
    </Link>
  );
};

export default AuthNavigate;
