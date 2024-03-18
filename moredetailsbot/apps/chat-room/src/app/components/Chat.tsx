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
import { VideoRoomMaster } from './videoRoom/VideoRoomMaster';
import VideoRoomGuest from './videoRoom/VideoRoomGuest';

const textChat = {
  img: 'photo2024-02-11_17-14-16.jpg',
  name: 'Антон',
  time: '17.03.24',
  lastMessage: 'text',
};

const videoChatMaster = {
  img: '2024-03-19_00-48-51.png',
  name: 'Стриммер',
  time: '19.03.24',
  lastMessage: 'video',
};

const videoChatGuest = {
  img: '2024-03-18_23-35-23.png',
  name: 'Зритель',
  time: '19.03.24',
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

  const openVideoRoomMaster = () => {
    dispatch(typeChatRoom('openVideoRoomMaster'));
    dispatch(setChatRoomChatId(10));
    dispatch(showChatRoomSlide(true));
    joinChat({ chat: 11, user: user.appUser });
  };

  const openVideoRoomGuest = () => {
    dispatch(typeChatRoom('openVideoRoomGuest'));
    dispatch(setChatRoomChatId(10));
    dispatch(showChatRoomSlide(true));
    joinChat({ chat: 11, user: user.appUser });
  };

  const openVideoRoomT = () => {
    dispatch(typeChatRoom('openVideoRoomT'));
    dispatch(setChatRoomChatId(10));
    dispatch(showChatRoomSlide(true));
    joinChat({ chat: 12, user: user.appUser });
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
          handelClick={openVideoRoomMaster}
          img={videoChatMaster.img}
          name={videoChatMaster.name}
          time={videoChatMaster.time}
          lastMessage={videoChatMaster.lastMessage}
        />
        <Contact
          handelClick={openVideoRoomGuest}
          img={videoChatGuest.img}
          name={videoChatGuest.name}
          time={videoChatGuest.time}
          lastMessage={videoChatGuest.lastMessage}
        />
      </ul>
      <SlidePage slide={slide}>
        {type === 'openChatRoom' && data && (
          <ChatRoom accessToken={data.accessToken} />
        )}
        {type === 'openVideoRoomMaster' && data && (
          <VideoRoomMaster accessToken={data.accessToken} />
        )}
        {type === 'openVideoRoomGuest' && data && (
          <VideoRoomGuest accessToken={data.accessToken} />
        )}
      </SlidePage>
    </>
  );
};
export default Chat;
