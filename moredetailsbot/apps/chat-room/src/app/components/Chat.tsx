import { useJoinMutation } from '@api';
import ChatRoom from './ChatRoom';

export const Chat = () => {
  const [joinChat, { data }] = useJoinMutation();
  const handelClick = () => {
    joinChat({ chat: 10, user: 3 });
  };
  return (
    <p>
      <button onClick={() => handelClick}>Click</button>
      {data && <ChatRoom accessToken={data.accessToken} />}
    </p>
  );
};
export default Chat;
