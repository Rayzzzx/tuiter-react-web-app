import { createSlice } from "@reduxjs/toolkit";

const profile = {
  firstName: "Xun",
  lastName: "Zhu",
  handle: "xunzhu",
  profilePicture: "xunzhu.jpeg",
  bannerPicture: "mountain.jpeg",
  bio: "Software Engineer, Basketball player, Cool man.",
  website: "https://www.linkedin.com/in/xun-zhu/",
  location: "Pleasant Hill, CA",
  dateOfBirth: "6/1/1999",
  dateJoined: "6/20010",
  followingCount: 200,
  followersCount: 1000,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    updateProfile(state, action) {
      const updatedProfile = action.payload;
      let [firstName, ...lastName] = updatedProfile.name.split("/");
      lastName = lastName.join(" ");
      const bio = updatedProfile.bio;
      const location = updatedProfile.location;
      const website = updatedProfile.website;
      const [year, month, day] = updatedProfile.birthday.split("-");
      const dateOfBirth = [month, day, year].join("/");
      return {
        ...state,
        firstName,
        lastName,
        bio,
        location,
        website,
        dateOfBirth,
      };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
