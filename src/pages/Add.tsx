import CloseIcon from '@mui/icons-material/Close';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory } from 'react-router';
import { Wrapper } from '../components/Wrapper';
import { useGlobalStyles } from '../utils/globalStyles';

interface AddProps {}

export const Add: React.FC<AddProps> = () => {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();
  const history = useHistory();

  return (
    <Wrapper>
      <div className={styles.flex_space_between}>
        <h1 className={styles.title}>Add Education</h1>
        <IconButton onClick={() => history.push('/')}>
          <CloseIcon />
        </IconButton>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label='School Name'
                variant='standard'
                fullWidth
              />
              <TextField
                label='Field of Study'
                variant='standard'
                fullWidth
                className={globalStyles.mt5}
              />
              <TextField
                label='Start date'
                variant='standard'
                fullWidth
                className={globalStyles.mt5}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Education Level'
                variant='standard'
                fullWidth
              />
              <TextField
                label='City'
                variant='standard'
                fullWidth
                className={globalStyles.mt5}
              />
            </Grid>
          </Grid>
          <textarea
            name=''
            className={styles.textarea}
            rows={10}></textarea>
          <Button variant='contained' size='large'>
            Save
          </Button>
        </Grid>
      </Grid>
      {/* <pre>{JSON.stringify(userEducation, null, 2)}</pre> */}
    </Wrapper>
  );
};

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundColor: '#F9F9F9',
    height: '100vh',
    paddingTop: '5vh',
  },
  container: {
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  textarea: {
    width: '100%',
    marginTop: 50,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 20,
  },
  flex_space_between: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
