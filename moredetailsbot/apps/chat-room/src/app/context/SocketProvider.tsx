import { useMemo } from 'react';
import { io } from 'socket.io-client';

type SocketProviderProps = string;

export const useSocket = (accessToken: SocketProviderProps) => {
  const socket = useMemo(
    () =>
      io('https://api80q.ru/chat', {
        auth: {
          token: accessToken,
        },
        transports: ['websocket', 'polling'],
      }),
    []
  );

  return socket;
};
