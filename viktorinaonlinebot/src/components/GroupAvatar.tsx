import { useGetFilePhotoQuery } from "./store/api/groupsSlise";

interface GroupAvatarProps {
  id: string;
}

export default function GroupAvatar({ id }: GroupAvatarProps) {
  const {
    isLoading: loadPhoto,
    isError: errorPhoto,
    data: dataPhoto,
  } = useGetFilePhotoQuery(id);

  if (dataPhoto) {
    console.log(dataPhoto);
  }

  return (
    <>
      {dataPhoto && (
        <img
          className="inline-block h-14 w-14 rounded-full"
          src="data:image/png;base64,https://api80q.ru/viktorinaonlinebot/chat/tgGetFilePhoto/"
          alt="Проверка фото"
        />
      )}
    </>
  );
}
