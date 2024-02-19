import { useGetFilePhotoQuery } from '@api/group';

interface GroupAvatarProps {
  id: string;
}

export default function GroupAvatar({ id }: GroupAvatarProps) {
  const { data } = useGetFilePhotoQuery(id);

  return (
    <>
      {data && (
        <img
          className="inline-block w-full rounded-full"
          src={`data:image/png;base64,${data}`}
          alt={id}
        />
      )}
    </>
  );
}
