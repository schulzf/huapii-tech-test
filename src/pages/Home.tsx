import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddExperienceBtn } from '../components/AddExperienceBtn';
import { ExperienceCard } from '../components/ExperienceCard';
import { Wrapper } from '../components/Wrapper';
import { selectUserEducation } from '../redux/slices/educationSlice';
import { getEducationRecords } from '../redux/thunks/experiencesThunks';
import { colors } from '../utils/constants';
import { useGlobalStyles } from '../utils/globalStyles';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();
  const userEducation = useSelector(selectUserEducation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEducationRecords(123));
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className={`${globalStyles.flex} ${globalStyles.mb3}`}>
        <h1 className={styles.title}>Education</h1>
        <AddExperienceBtn size={42} color={colors.primary} />
      </div>

      {userEducation.map((item: any) => (
        <ExperienceCard data={item} key={item.key} />
      ))}

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
}));
