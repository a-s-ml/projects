import { MessageMyChat, MessageSystem, SendPanel } from '@components';
import { selectdataChatRoomData } from '@slice/chat-room';
import { useChatRoomSelector } from '@store/chat-room';
import ChatPanel from 'libs/components/src/lib/ChatPanel';
import MessageChat from 'libs/components/src/lib/MessageChat';
import { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketProvider';

export interface ChatRoomProps {
  accessToken: string;
}

type Event = {
  id: number;
  user: number;
  chat: number;
  text: string;
};

export const ChatRoom = ({ accessToken }: ChatRoomProps) => {
  const dataUser = useChatRoomSelector(selectdataChatRoomData);
  console.log('dataUser', dataUser);

  const socket = useSocket(accessToken);

  const [state, setState] = useState<Event[]>([]);

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  const handleSubmit = (message: string) => {
    socket.emit('message', message);
    setMessage('');
  };

  useEffect(() => {
    const listener = (args: Event) => {
      setState((prevState) => [...prevState, args]);
      console.log('state', state);
      console.log('args', args);
    };
    socket.on('chat_updated', listener);
    socket.on('exception', listener);
    socket.on('message', listener);
  }, [socket]);

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
              name={String(dataUser.UserData.user.username)}
              action={'присоединился'}
              chat={String(message.chat)}
            />
          )
        )}
      <SendPanel
        message={message}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </ChatPanel>
  );
};

export default ChatRoom;
