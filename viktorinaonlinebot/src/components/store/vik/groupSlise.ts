import { createSelector } from "@reduxjs/toolkit";
import { vikApi } from "../vik/vik.api";
import { IUserData } from "../../../models/IUser";

export const groupVikApi = vikApi.injectEndpoints({
  endpoints: (build) => ({

  })
});
