import { useGetFilePhotoQuery } from "../../store/api/group.api";

interface GroupAvatarProps {
  id: string;
}

export default function GroupAvatar({ id }: GroupAvatarProps) {
  const {
    isLoading: loadPhoto,
    data: dataPhoto,
  } = useGetFilePhotoQuery(id);

  return (
    <>
      {loadPhoto && <p>sdfsf</p>}
      {dataPhoto && (
        <img
          className="inline-block h-10 w-14 rounded-full"
          src={`data:image/png;base64,${dataPhoto}`} alt={id}
        />
      )}
    </>
  );
}
