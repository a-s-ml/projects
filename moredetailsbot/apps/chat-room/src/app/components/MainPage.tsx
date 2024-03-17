import { useValidateQuery } from '@api';
import { useChatRoomDispatch } from '@store/chat-room';
import { dataChatRoom } from '@slice/chat-room';
import Chat from './Chat';

export const MainPage = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useChatRoomDispatch();

  const { data, isSuccess } = useValidateQuery(tg.initData);

  isSuccess && dispatch(dataChatRoom(data));

  return <>{data && <Chat user={data.UserData} />}</>;
};
export default MainPage;
