import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Container maxWidth='md' className={styles.container}>
        {children}
      </Container>
    </div>
  );
};

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#F9F9F9',
    height: '100vh',
    paddingTop: '5vh',
  },
  container: {
    backgroundColor: '#FFF',
    padding: 20,
  },
});
