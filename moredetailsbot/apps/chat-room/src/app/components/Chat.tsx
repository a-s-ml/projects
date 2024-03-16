import { useJoinMutation } from '@api';
import ChatRoom from './ChatRoom';

export const Chat = () => {
  const [joinChat, {data}] = useJoinMutation();
  joinChat({ chat: 10, user: 3 });
  return (
    <p>
      {data && (
      <ChatRoom accessToken={data.accessToken} />
      )}
    </p>
  );
};
export default Chat;
