import { createSelector } from "@reduxjs/toolkit";
import { vikApi } from "../vik/vik.api";
import { IUserData } from "../../../models/IUser";

export const groupVikApi = vikApi.injectEndpoints({
  endpoints: (build) => ({
    validate: build.query<IUserData, string>({
      query: (initData: string) => ({
        url: `chat/validateUser`,
        params: {
          initData: initData,
        }
      })
    })
  })
});
