
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: 'Pavan Prajapat',
  firstName: 'Pavan',
  lastName: 'Prajapat',
  contactNumber: '+91 83020 88852',
  email: 'pavanprajapat241@gmail.com',
  address: 'Pratap Nagar Apani Dhani road, Udaipur(Rajsthan)',
  experience: '3+',
  client: 3,
  project: '12+',
  nationality: 'Indian',
  Language: ['Hindi', 'English'],
  instagram: 'https://www.instagram.com/piyushprajapat29',
  linkedin: 'https://www.linkedin.com/in/pavan-prajapat-77ba26226',
  github: 'https://github.com/Hackerart512',
  telegram: 'https://t.me/pavan_official_tech',
  Facebook: 'https://www.facebook.com/pavanprajapat241',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
