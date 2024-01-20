import { useRef } from "react";

interface SwipeToDeleteProps {
  rows: {
    id: number;
    title: string;
  }[];
  onDel: (id: number) => void;
}

export const SwipeToDelete = ({ rows, onDel }: SwipeToDeleteProps) => {
  return (
    <div className="w-9/12 border-solid border-1 overflow-hidden">
      {rows.map((row) => (
        <Item key={row.id}>
          <p className="flex-1 w-full">{row.title}</p>
          <div
            className="bg-red-500 text-left min-w-[55px]"
            onClick={() => onDel(row.id)}
          >
            Delete
          </div>
        </Item>
      ))}
    </div>
  );
};

export default SwipeToDelete;

interface ItemProps {
  children: React.ReactNode;
}

const Item = ({ children }: ItemProps) => {
  const refOn = useRef<HTMLElement>(null);
  let downX: number;

  const onPointerMove = (e: { clientX: number }) => {
    const newX = e.clientX;
    if (refOn.current) {
      if (newX - downX < 50) {
        refOn.current.style.transform = "translate(-55px)";
        setTimeout(() => {
          if (refOn.current) refOn.current.style.transform = "translate(0px)";
        }, 4000);
      } else refOn.current.style.transform = "translate(0px)";
    }
  };

  const onPointerUp = () =>
    refOn.current?.removeEventListener("pointermove", onPointerMove);

  const onPointerDown = (e: { clientX: number }) => {
    downX = e.clientX;
    if (refOn.current) {
      refOn.current.addEventListener("pointermove", onPointerMove);
    }
  };

  return (
    <div
      className="flex bg-slate-50 my-1 mx-0 transition transform duration-800"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {children}
    </div>
  );
};