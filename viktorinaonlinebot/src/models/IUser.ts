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
  all: number;
  active: number;
}

export interface IAnswersProgress {
  all: number;
  right: number;
}

export interface IQuestionsProgress {
  all: number;
  moderate: number;
}