import { useGetUserByIdQuery } from '@api';
import { useChatRoomSelector } from '@store/chat-room';
import { selectdataChatRoomData } from '@slice/chat-room';
import { MessageChat } from '@components';

type MessageProps = {
  id: number;
  text: string;
};

export const Message = ({ id, text }: MessageProps) => {
  const dataUser = useChatRoomSelector(selectdataChatRoomData);
  const { data, isSuccess } = useGetUserByIdQuery(id);

  return (
    <>
      {dataUser && isSuccess && (
        <MessageChat
          my={dataUser.UserData.user.id === id ? true : false}
          name={dataUser.UserData.user.id === id ? '' : data.name}
          text={text}
        />
      )}
    </>
  );
};
export default Message;
