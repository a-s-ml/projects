import { MessageMyChat, MessageSystem, SendPanel } from '@components';
import { selectdataChatRoomData } from '@slice/chat-room';
import { useChatRoomSelector } from '@store/chat-room';
import ChatPanel from 'libs/components/src/lib/ChatPanel';
import MessageChat from 'libs/components/src/lib/MessageChat';
import { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketProvider';
import { Event } from '@types';

export interface ChatRoomProps {
  accessToken: string;
}

export const ChatRoom = ({ accessToken }: ChatRoomProps) => {
  const dataUser = useChatRoomSelector(selectdataChatRoomData);
  console.log('dataUser', dataUser);

  const socket = useSocket(accessToken);

  const [states, setState] = useState<Event[]>([]);

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
      console.log('state', states);
      console.log('args', args);
    };
    socket.on('chat_updated', listener);
    socket.on('exception', listener);
    socket.on('message', listener);
  }, [socket]);

  return (
    <ChatPanel>
      {states &&
        dataUser &&
        states.map((state) =>
          state.type === 'message' && state.text ? (
            dataUser && state.user.id !== dataUser.UserData.appUser ? (
              <MessageChat
                key={state.type}
                name={String(state.user.name)}
                text={state.text.text}
              />
            ) : (
              <MessageMyChat key={state.type} text={state.text.text} />
            )
          ) : (
            <MessageSystem
              name={String(state.user.name)}
              action={state.type}
              chat={String(state.chat.name)}
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
