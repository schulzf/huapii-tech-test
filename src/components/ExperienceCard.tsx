import EditIcon from '@mui/icons-material/Edit';
import { Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { colors } from '../utils/constants';
import { useGlobalStyles } from '../utils/globalStyles';

interface EducationData {
  id: number;
  schoolName: string;
  fieldOfStudy: string;
  description: string;
  city: string;
  from: string;
  to: string;
  current: boolean;
  educationType: string;
}
interface ExperienceCardProps {
  data: EducationData[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  data,
}) => {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();
  const {
    schoolName,
    fieldOfStudy,
    description,
    city,
    from,
    to,
    current,
    educationType,
  } = data as unknown as EducationData;

  const fromYear = parseInt(from.slice(0, 4));
  const toYear = parseInt(to.slice(0, 4));

  return (
    <Grid container className={globalStyles.mb3}>
      <Grid item xs={12} md={2}>
        <img
          src='https://via.placeholder.com/120'
          alt='Company logo'
          className={styles.company_logo}
        />
      </Grid>
      <Grid item xs={12} md={10}>
        <div className={globalStyles.flex}>
          <h2 className={styles.education}>{fieldOfStudy}</h2>
          <h2 className={styles.education_type}> ({educationType})</h2>
          <h2 className={`${styles.company} ${globalStyles.ml1}`}>
            {schoolName}
          </h2>
          <IconButton>
            <EditIcon sx={{ color: colors.primary }} />
          </IconButton>
        </div>
        <div>
          {fromYear}-{current ? 'current' : toYear} | {toYear - fromYear}{' '}
          Year{toYear - fromYear > 1 && 's'} | {city}
        </div>
        <div>
          <p>{description}</p>
        </div>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  company_logo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  education: {
    fontSize: 18,
    fontWeight: 500,
  },
  education_type: {
    fontSize: 18,
    fontWeight: 500,
    textTransform: 'lowercase',
  },
  company: {
    fontSize: 18,
    fontWeight: 300,
  },
});
