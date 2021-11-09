import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiBaseUrl } from './../../utils/constants';

export const getEducationRecords = createAsyncThunk(
  'education/list_education_records',
  async (id: number) => {
    const response = await axios.get(
      apiBaseUrl + `/api/v1/user/${id}/education`
    );

    return response.data;
  }
);
