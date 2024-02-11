export interface IUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  allows_write_to_pm?: boolean;
}

export interface IUserData {
  auth_date: number;
  query_id: string;
  user: IUser;
}

export interface IValidate {
  validate: boolean;
  UserData: IUserData;
  ProgressData: IProgressData;
}

export interface IProgressData {
  groupsProgress: IGroupsProgress;
  answersProgress: IAnswersProgress;
  questionsProgress: IQuestionsProgress;
}

export interface IGroupsProgress {
  groupsAll: number;
  groupsActive: number;
}

export interface IAnswersProgress {
  answersAll: number;
  answersRight: number;
}

export interface IQuestionsProgress {
  questionsAll: number;
  questionsModerate: number;
}