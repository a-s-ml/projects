import { useGetFilePhotoQuery } from '@api/group';

interface GroupAvatarProps {
  id: string;
}

export default function GroupAvatar({ id }: GroupAvatarProps) {
  const { isLoading: loadPhoto, data: dataPhoto } = useGetFilePhotoQuery(id);

  return (
    <>
      {loadPhoto && <p>...</p>}
      {dataPhoto && (
        <img
          className="inline-block w-full rounded-full"
          src={`data:image/png;base64,${dataPhoto}`}
          alt={id}
        />
      )}
    </>
  );
}
