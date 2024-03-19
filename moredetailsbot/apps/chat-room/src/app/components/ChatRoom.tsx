import { MessageSystem, Preloader, SendPanel } from '@components';
import { selectChatRoomChatId, selectdataChatRoomData } from '@slice/chat-room';
import { useChatRoomSelector } from '@store/chat-room';
import ChatPanel from 'libs/components/src/lib/ChatPanel';
import { useEffect, useRef, useState } from 'react';
import { useSocket } from '../context/SocketProvider';
import { Event } from '@types';
import { useGetMessageQuery } from '@api';
import Message from './Message';

export interface ChatRoomProps {
  accessToken: string;
}

export const ChatRoom = ({ accessToken }: ChatRoomProps) => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const chatid = useChatRoomSelector(selectChatRoomChatId);
  const dataUser = useChatRoomSelector(selectdataChatRoomData);
  const {
    data: chatmessages,
    isSuccess: successChatmessages,
    isLoading,
  } = useGetMessageQuery(chatid);

  const socket = useSocket(accessToken);

  const [states, setState] = useState<Event[]>([]);

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  const handleSubmit = () => {
    message.trim();
    if (message != '') {
      socket.emit('message', message);
      setMessage('');
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [states]);

  useEffect(() => {
    const listener = (args: Event) => {
      setState((prevState) => [...prevState, args]);
      console.log('args', args);
    };
    socket.on('chat_updated', listener);
    socket.on('exception', listener);
    socket.on('message', listener);
  }, [socket]);

  console.log('socket', socket);
  return (
    <ChatPanel>
      {isLoading && <Preloader />}
      {dataUser &&
        successChatmessages &&
        chatmessages.map((chatmessage) => (
          <Message
            key={chatmessage.id}
            id={chatmessage.user}
            text={chatmessage.text}
          />
        ))}
      {states &&
        dataUser &&
        states.map((state) =>
          state.type === 'message' && state.text ? (
            <Message
              key={state.type}
              id={state.user.id}
              text={state.text.text}
            />
          ) : (
            <MessageSystem
              name={String(state.user.name)}
              action={state.type}
              chat={String(state.chat.name)}
              size={state.size}
            />
          )
        )}
      <div className="pb-4" ref={bottomRef} />
      <SendPanel
        message={message}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </ChatPanel>
  );
};

export default ChatRoom;
