import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";

export interface Props {
  onDelete: Function;
  disabled?: boolean;
  children: React.ReactNode;
}

const cursorPosition = (event: any) => {
  if (event?.touches?.[0]?.clientX) return event.touches[0].clientX;
  if (event?.clientX) return event?.clientX;
  if (event?.nativeEvent?.touches?.[0]?.clientX)
    return event.nativeEvent.touches[0].clientX;
  return event?.nativeEvent?.clientX;
};

const SwipeToDelete = ({ onDelete, disabled = false, children }: Props) => {
  const deleteWidth: number = 75;
  const deleteThreshold: number = 75;
  const transitionDuration: number = 250;
  const [touching, setTouching] = useState(false);
  const [translate, setTranslate] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const startTouchPosition = useRef(0);
  const initTranslate = useRef(0);
  const container = useRef<HTMLDivElement>(null);
  const containerWidth: number =
    container.current?.getBoundingClientRect().width || 0;
  const deleteWithoutConfirmThreshold: number =
    containerWidth * (deleteThreshold / 100);

  const onStart = useCallback(
    (event: React.TouchEvent | React.MouseEvent) => {
      if (disabled) return;
      if (touching) return;
      startTouchPosition.current = cursorPosition(event);
      initTranslate.current = translate;
      setTouching(true);
    },
    [disabled, touching, translate]
  );

  useEffect(() => {
    const root = container.current;
    root?.style.setProperty("--rstdiTranslate", translate + "px");
    const shiftDelete = -translate >= deleteWithoutConfirmThreshold;
    root?.style.setProperty(
      `--rstdiButtonMarginLeft`,
      (shiftDelete
        ? containerWidth + translate
        : containerWidth - deleteWidth) + "px"
    );
  }, [translate, deleteWidth, containerWidth, deleteWithoutConfirmThreshold]);

  const onMove = useCallback(
    function (event: TouchEvent | MouseEvent) {
      if (!touching) return;
      if (
        cursorPosition(event) >
        startTouchPosition.current - initTranslate.current
      )
        return setTranslate(0);

      setTranslate(
        cursorPosition(event) -
          startTouchPosition.current +
          initTranslate.current
      );
    },
    [touching]
  );

  const onMouseMove = useCallback(
    function (event: MouseEvent): any {
      onMove(event);
    },
    [onMove]
  );

  const onTouchMove = useCallback(
    function (event: TouchEvent): any {
      onMove(event);
    },
    [onMove]
  );

  const onDeleteClick = useCallback(() => {
    setDeleting(() => true);
    window.setTimeout(onDelete, transitionDuration);
  }, [onDelete, transitionDuration]);

  const onMouseUp = useCallback(
    function () {
      startTouchPosition.current = 0;
      const acceptableMove = -deleteWidth * 0.7;
      const deleteWithoutConfirm = -translate >= deleteWithoutConfirmThreshold;
      if (deleteWithoutConfirm) {
        setTranslate(() => -containerWidth);
      } else if (translate < acceptableMove && !deleteWithoutConfirm) {
        setTranslate(() => -deleteWidth);
      }
      setTouching(() => false);
      if (deleteWithoutConfirm) onDeleteClick();
    },
    [
      containerWidth,
      deleteWidth,
      deleteWithoutConfirmThreshold,
      onDeleteClick,
      translate,
    ]
  );

  useEffect(() => {
    if (touching) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchend", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove, touching]);

  return (
    <div
      ref={container}
      className={`${
        classes.rstdi
      } w-auto relative border-box overflow-hidden h-full before:border-box after:border-box ${
        deleting ? ` transition-all ease-out duration-250 max-h-0` : ""
      }`}
    >
      <div
        className={`${classes.delete} absolute right-0 top-0 h-full w-full inline-flex justify-start items-center bg-red-500 ${
          deleting ? ` transition-all ease-out duration-250 max-h-0` : ""
        }`}
      >
        <button onClick={onDeleteClick}>Удалить</button>
      </div>
      <div
        className={`${classes.content} h-full w-auto relative ${
          deleting ? ` relative h-full w-auto` : ""
        }${!touching ? ` transition-all ease-out duration-300` : ""}`}
        onMouseDown={onStart}
        onTouchStart={onStart}
      >
        <div className={classes.item}>{children}</div>
      </div>
    </div>
  );
};

export default SwipeToDelete;
