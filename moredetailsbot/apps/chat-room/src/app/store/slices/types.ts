import { Validate } from '@types';
import { Socket } from 'socket.io-client';

export type Poll = {
  id: number;
  topic: string;
  votesPerVoter: number;
  userID: string;
  hasStarted: number;
  pollID: string;
  name: string;
};

export interface chatRoomAppState {
  chatRoomSlide: boolean;
  chatRoomType: string;
  chatRoomChat: ChatState;
  chatRoomData: Validate | undefined;
}

export type ChatState = {
  id: number;
  isLoading: boolean;
  poll?: Poll;
  accessToken?: string;
  socket?: Socket;
  wsErrors: WsErrorUnique[];
  me?: Me;
  isAdmin: boolean;
  nominationCount: number;
  participantCount: number;
};

type WsErrorUnique = WsError & {
  id: string;
};

type Me = {
  id: string;
  name: string;
};

type WsError = {
  type: string;
  message: string;
};
