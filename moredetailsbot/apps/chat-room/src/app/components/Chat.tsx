import { useJoinMutation } from '@api';
import ChatRoom from './ChatRoom';

export const Chat = () => {
  const [joinChat, { data }] = useJoinMutation();

  function handelClick() {
    joinChat({ chat: 10, user: 3 });
    console.log(data);
  }

  return (
    <div className="text-center p-10">
      <button
        className={'p-2 text-red-300 bg-slate-100'}
        onClick={() => handelClick()}
      >
        Click
      </button>
      <ChatRoom accessToken={data?.accessToken} />
    </div>
  );
};
export default Chat;
