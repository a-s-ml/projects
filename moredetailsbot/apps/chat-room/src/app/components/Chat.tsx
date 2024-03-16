import { useJoinMutation } from '@api';
import ChatRoom from './ChatRoom';

export const Chat = () => {
  const [joinChat, {}] = useJoinMutation();

  const handelClick = () => {
    console.log('click1');
    joinChat({ chat: 10, user: 3 });
    console.log('click2');
  };
  
  return (
    <div className="text-center p-10">
      <button
        className={'p-2 text-red-300 bg-slate-100'}
        onClick={() => handelClick}
      >
        Click
      </button>
      <ChatRoom accessToken={'asdasdasd'} />
    </div>
  );
};
export default Chat;
