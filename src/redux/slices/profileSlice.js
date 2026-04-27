
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: 'Pavan Prajapat',
  firstName: 'Pavan',
  lastName: 'Prajapat',
  contactNumber: '918302088852',
  email: 'pavanprajapat241@gmail.com',
  address: 'Pratap Nagar Apani Dhani road, Udaipur(Rajsthan)',
  experience: '2+ Years',
  nationality: 'Indian',
  Language: ['Hindi', 'English', 'Marwadi'],
  instagram: 'https://www.instagram.com/pavanprajapat241/',
  linkedin: 'https://www.linkedin.com/in/pavan-prajapat-241/',
  github: 'https://github.com/pavanprajapat241',
  telegram: 'https://t.me/pavanprajapat241',
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
