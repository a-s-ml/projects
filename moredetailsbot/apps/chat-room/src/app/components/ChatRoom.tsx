import { MessageMyChat, MessageSystem, SendPanel } from '@components';
import { selectdataChatRoomData } from '@slice/chat-room';
import { useChatRoomSelector } from '@store/chat-room';
import ChatPanel from 'libs/components/src/lib/ChatPanel';
import MessageChat from 'libs/components/src/lib/MessageChat';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export interface ChatRoomProps {
  accessToken: string | undefined;
}

type Event = {
  id: number;
  user: number;
  chat: number;
  text: string;
};

export const ChatRoom = ({ accessToken }: ChatRoomProps) => {
  const dataUser = useChatRoomSelector(selectdataChatRoomData);
  console.log(dataUser);

  const [state, setState] = useState<Event[]>([]);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  useEffect(() => {
    const socket = io('https://api80q.ru/chat', {
      auth: {
        token: accessToken,
      },
      transports: ['websocket', 'polling'],
    });

    const listener = (args: Event) => {
      setState((prevState) => [...prevState, args]);
    };

    socket.on('chat_updated', listener);
    socket.on('exception', listener);
    socket.on('message', listener);
    
  }, [accessToken]);
  
  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   if (!message) return;

  //   socket.emit('sendMessage', { message, params });

  //   setMessage('');
  // };

  return (
    <ChatPanel>
      {state &&
        dataUser &&
        state.map((message) =>
          message.text ? (
            dataUser && message.chat !== dataUser.UserData.appUser ? (
              <MessageChat
                key={message.id}
                name={String(dataUser.UserData.user.username)}
                text={message.text}
              />
            ) : (
              <MessageMyChat key={message.id} text={message.text} />
            )
          ) : (
            <MessageSystem
              name={String(message.user)}
              action={'присоединился'}
              chat={String(message.chat)}
            />
          )
        )}
      <SendPanel
        message={message}
        handleChange={handleChange}
      />
    </ChatPanel>
  );
};

export default ChatRoom;

//export const getTokenPayload = (accessToken: string): TokenPayload =>
//  JSON.parse(window.atob(accessToken.split('.')[1]));
