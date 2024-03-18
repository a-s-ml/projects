import { useJoinMutation } from '@api';
import { useBackButton } from '@hooks';
import ChatRoom from './ChatRoom';
import { Contact, SlidePage } from '@components';
import { useChatRoomDispatch, useChatRoomSelector } from '@store/chat-room';
import {
  selectdataChatRoomSlide,
  selectdataChatRoomType,
  setChatRoomChatId,
  showChatRoomSlide,
  typeChatRoom,
} from '@slice/chat-room';
import { UserData } from '@types';
import VideoRoom from './videoRoom/VideoRoom';
import VideoRoomT from './videoRoom/VideoRoomT';

const textChat = {
  img: 'photo2024-02-11_17-14-16.jpg',
  name: 'Антон',
  time: '17.03.24',
  lastMessage: 'text',
};

const videoChat = {
  img: 'photo2024-02-11_17-14-16.jpg',
  name: 'Антон',
  time: '18.03.24',
  lastMessage: 'video',
};

type ChatProps = {
  user: UserData;
};

export const Chat = ({ user }: ChatProps) => {
  const dispatch = useChatRoomDispatch();
  const slide = useChatRoomSelector(selectdataChatRoomSlide);
  const type = useChatRoomSelector(selectdataChatRoomType);

  const [joinChat, { data }] = useJoinMutation();

  useBackButton(slide, () => dispatch(showChatRoomSlide(false)));

  const openChatRoom = () => {
    dispatch(typeChatRoom('openChatRoom'));
    dispatch(setChatRoomChatId(10));
    dispatch(showChatRoomSlide(true));
    joinChat({ chat: 10, user: user.appUser });
  };

  const openVideoRoom = () => {
    dispatch(typeChatRoom('openVideoRoom'));
    dispatch(setChatRoomChatId(10));
    dispatch(showChatRoomSlide(true));
    joinChat({ chat: 11, user: user.appUser });
  };

  return (
    <>
      <ul
        role="list"
        className="text-left divide-y divide-[var(--tg-theme-hint-color)]"
      >
        <Contact
          handelClick={openChatRoom}
          img={textChat.img}
          name={textChat.name}
          time={textChat.time}
          lastMessage={textChat.lastMessage}
        />
        <Contact
          handelClick={openVideoRoom}
          img={videoChat.img}
          name={videoChat.name}
          time={videoChat.time}
          lastMessage={videoChat.lastMessage}
        />
      </ul>
      <SlidePage slide={slide}>
        {type == 'openChatRoom' && data && (
          <ChatRoom accessToken={data.accessToken} />
        )}
        {type == 'openVideoRoom' && data && (
          <VideoRoomT accessToken={data.accessToken} />
        )}
      </SlidePage>
    </>
  );
};
export default Chat;
