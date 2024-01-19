import { useGetFilePhotoQuery } from "../../store/api/group.api";

interface DeleteButtonProps {
  id: number;
  onDelele: (id: number) => void;
}

export default function DeleteButton({ id, onDelele }: DeleteButtonProps) {
  return (
    <>
      <div className="bg-red text-left border-none min-w-[55px] h-full text-white" onClick={() => onDelele(id)}>
        <span>Удалить</span>
      </div>
    </>
  );
}
