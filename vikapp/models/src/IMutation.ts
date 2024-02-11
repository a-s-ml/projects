export interface IReqCategoryGroup {
  chat: bigint;
  category: number;
}

export interface IResCategoryGroup {
  id: number;
  chat: string;
  category: number;
}

export interface IReqTimeGroup {
  chat: bigint;
  time: number;
}
export interface IReqTypeGroup {
  chat: bigint;
  question_type: number;
}
