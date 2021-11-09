import { createSlice } from '@reduxjs/toolkit';
import { getEducationRecords } from './../thunks/experiencesThunks';

const initialState = {
  education: [],
  edit: {
    id: null,
    schoolName: '',
    fieldOfStudy: '',
    description: '',
    city: '',
    from: '',
    to: '',
    current: false,
    educationType: '',
  },
};

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
    clearEdit: (state) => {
      state.edit = initialState.edit;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEducationRecords.fulfilled, (state, action) => {
      state.education = action.payload;
    });
  },
});

export const { setEdit, clearEdit } = educationSlice.actions;
export const selectUserEducation = (state: any) =>
  state.education.education;
export const selectEdit = (state: any) => state.education.edit;

export default educationSlice.reducer;
