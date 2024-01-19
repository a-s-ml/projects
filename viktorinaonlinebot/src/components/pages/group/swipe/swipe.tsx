import { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";

interface SwipeToDeleteProps {
  rows: {
    id: number;
    title: string;
  }[];
  onDel: (id: number) => void;
}

export const SwipeToDelete = ({ rows, onDel }: SwipeToDeleteProps) => {
  return (
    <Wrapper>
      {rows.map((row) => (
        <Item key={row.id}>
          <p>{row.title}</p>
          <DeleteButton onClick={() => onDel(row.id)}>Delete</DeleteButton>
        </Item>
      ))}
    </Wrapper>
  );
};

export default SwipeToDelete;

const Wrapper = styled.div`
  width: 80%;
  border: 1px solid;
  overflow: hidden;
`;

const DeleteButton = styled.div`
  background: red;
  text-align: left;
  border: none;
  min-width: 55px;
`;

interface ItemProps {
  children: React.ReactNode;
}

const Item = ({ children }: ItemProps) => {
  const ref = useRef<HTMLElement>();
  let downX: number;

  const onPointerMove = (e: { clientX: number }) => {
    const newX = e.clientX;
    if (ref.current) {
      if (newX - downX < 50) {
        ref.current.style.transform = "translate(-55px)";
        setTimeout(() => {
          if (ref.current) ref.current.style.transform = "translate(0px)";
        }, 4000);
      } else ref.current.style.transform = "translate(0px)";
    }
  };

  const onPointerUp = () =>
    ref.current?.removeEventListener("pointermove", onPointerMove);

  const onPointerDown = (e: { clientX: number }) => {
    downX = e.clientX;
    if (ref.current) {
      ref.current.addEventListener("pointermove", onPointerMove);
    }
  };

  return (
    <ItemWrapper
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {children}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  background-color: lightgray;
  margin: 3px 0;
  transition: transform 800ms;
  p {
    flex: 1 0 100%;
  }
`;
