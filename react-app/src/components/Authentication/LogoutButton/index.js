import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/session';
import styles from './LogoutButton.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    window.location.reload();
  };

  return <button className={styles.button} onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
