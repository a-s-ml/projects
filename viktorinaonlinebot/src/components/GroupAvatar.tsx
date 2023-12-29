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
      {loadPhoto && <p>sdfsf</p>}
      {dataPhoto && (
        <img
          className="inline-block h-14 w-14 rounded-full"
          src={`data:image/png;base64,${dataPhoto}`}
        />
      )}
    </>
  );
}
