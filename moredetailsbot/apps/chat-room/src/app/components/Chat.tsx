import { useJoinMutation } from '@api';
import { useBackButton } from '@hooks';
import ChatRoom from './ChatRoom';
import { Contact, SlidePage } from '@components';
import { useChatRoomDispatch, useChatRoomSelector } from '@store/chat-room';
import {
  selectdataChatRoomSlide,
  selectdataChatRoomType,
  showChatRoomSlide,
  typeChatRoom,
} from '@slice/chat-room';

const testChat = {
  img: '',
  name: 'Антонио-Молодец',
  time: '17.03.24',
  lastMessage: '....',
};

export const Chat = () => {
  const dispatch = useChatRoomDispatch();
  const slide = useChatRoomSelector(selectdataChatRoomSlide);
  const type = useChatRoomSelector(selectdataChatRoomType);

  const [joinChat, { data }] = useJoinMutation();

  useBackButton(slide, () => dispatch(showChatRoomSlide(false)));

  const openChatRoom = () => {
    dispatch(typeChatRoom('openChatRoom'));
    dispatch(showChatRoomSlide(true));
    joinChat({ chat: 10, user: 3 });
  };
  console.log(slide);
  console.log(type);
  return (
    <>
      <ul
        role="list"
        className="text-left divide-y divide-[var(--tg-theme-hint-color)]"
      >
        <Contact
          handelClick={openChatRoom}
          img={testChat.img}
          name={testChat.name}
          time={testChat.time}
          lastMessage={testChat.lastMessage}
        />
      </ul>
      <SlidePage slide={slide}>
        {type == 'openChatRoom' && <ChatRoom accessToken={data?.accessToken} />}
      </SlidePage>
    </>
  );
};
export default Chat;
