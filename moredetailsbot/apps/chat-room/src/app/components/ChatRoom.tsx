import {
  MessageMyChat,
  MessageSystem,
  Preloader,
  SendPanel,
} from '@components';
import { selectChatRoomChatId, selectdataChatRoomData } from '@slice/chat-room';
import { useChatRoomDispatch, useChatRoomSelector } from '@store/chat-room';
import ChatPanel from 'libs/components/src/lib/ChatPanel';
import MessageChat from 'libs/components/src/lib/MessageChat';
import { useEffect, useRef, useState } from 'react';
import { useSocket } from '../context/SocketProvider';
import { Event } from '@types';
import { useGetMessageQuery } from '@api';

export interface ChatRoomProps {
  accessToken: string;
}

export const ChatRoom = ({ accessToken }: ChatRoomProps) => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const dispatch = useChatRoomDispatch();
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

  const handleSubmit = (message: string) => {
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

  return (
    <ChatPanel>
      {isLoading && <Preloader />}
      {dataUser &&
        successChatmessages &&
        chatmessages.map((chatmessage) =>
          chatmessage.user !== dataUser.UserData.appUser ? (
            <MessageChat
              key={chatmessage.id}
              name={String(chatmessage.user)}
              text={chatmessage.text}
            />
          ) : (
            <MessageMyChat key={chatmessage.id} text={chatmessage.text} />
          )
        )}
      {states &&
        dataUser &&
        states.map((state) =>
          state.type === 'message' && state.text ? (
            state.user.id !== dataUser.UserData.appUser ? (
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
