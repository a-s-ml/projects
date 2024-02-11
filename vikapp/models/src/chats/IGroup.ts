export interface IGroup {
  id: number;
  chat: bigint;
  type: string;
  bot: number;
  date: Date | undefined;
  referral: string;
  question_type: number;
  time: number;
}
