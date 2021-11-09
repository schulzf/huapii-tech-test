import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

interface AddExperienceBtnProps {
  size?: number;
  color?: string;
}

export const AddExperienceBtn: React.FC<AddExperienceBtnProps> = ({
  color = '#000',
  size = 36,
  ...props
}) => {
  const history = useHistory();

  return (
    <IconButton onClick={() => history.push('/add')}>
      <AddCircleIcon sx={{ fontSize: size, color: color }} />
    </IconButton>
  );
};
