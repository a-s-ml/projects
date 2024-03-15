import { useJoinMutation } from '@api';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

function App() {
  const [joinChat, {}] = useJoinMutation();
  const accessToken = joinChat({ chat: 10, user: 3 });
  const socket = io('http://api80q.ru:4000/chat', {
    auth: {
      token: accessToken,
    },
    transports: ['websocket', 'polling'],
  });

  useEffect(() => {
    socket.on('chat_updated', ({ data }) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    socket.on('exception', ({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <p>
      <b></b>
    </p>
  );
}
export default App;
