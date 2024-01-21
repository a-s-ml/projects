import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";

export interface Props {
  onDelete: Function;
  disabled?: boolean;
  deleteWidth?: number;
  deleteThreshold?: number;
  showDeleteAction?: boolean;
  className?: string;
  id?: string;
  rtl?: boolean;
  children?: React.ReactNode;
}

const cursorPosition = (event: any) => {
  if (event?.touches?.[0]?.clientX) return event.touches[0].clientX;
  if (event?.clientX) return event?.clientX;
  if (event?.nativeEvent?.touches?.[0]?.clientX)
    return event.nativeEvent.touches[0].clientX;
  return event?.nativeEvent?.clientX;
};

const SwipeToDelete = ({
  onDelete,
  disabled = false,
  deleteWidth = 75,
  deleteThreshold = 75,
  showDeleteAction = true,
  className = "",
  id = "",
  rtl = false,
  children,
}: Props) => {
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
    root?.style.setProperty("--rstdiIsRtl", rtl ? "1" : "-1");
    root?.style.setProperty("--rstdiDeleteWidth", deleteWidth + "px");
  }, [deleteWidth, rtl]);

  useEffect(() => {
    const root = container.current;
    root?.style.setProperty(
      "--rstdiTranslate",
      translate * (rtl ? -1 : 1) + "px"
    );
    const shiftDelete = -translate >= deleteWithoutConfirmThreshold;
    root?.style.setProperty(
      `--rstdiButtonMargin${rtl ? "Right" : "Left"}`,
      (shiftDelete
        ? containerWidth + translate
        : containerWidth - deleteWidth) + "px"
    );
  }, [
    translate,
    deleteWidth,
    containerWidth,
    rtl,
    deleteWithoutConfirmThreshold,
  ]);

  const onMove = useCallback(
    function (event: TouchEvent | MouseEvent) {
      if (!touching) return;
      if (
        !rtl &&
        cursorPosition(event) >
          startTouchPosition.current - initTranslate.current
      )
        return setTranslate(0);
      if (
        rtl &&
        cursorPosition(event) <
          startTouchPosition.current - initTranslate.current
      )
        return setTranslate(0);
      setTranslate(
        cursorPosition(event) -
          startTouchPosition.current +
          initTranslate.current
      );
    },
    [rtl, touching]
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
      const showDelete = showDeleteAction
        ? (rtl ? -1 : 1) * translate < acceptableMove
        : false;
      const notShowDelete = showDeleteAction
        ? (rtl ? -1 : 1) * translate >= acceptableMove
        : true;
      const deleteWithoutConfirm =
        (rtl ? 1 : -1) * translate >= deleteWithoutConfirmThreshold;
      if (deleteWithoutConfirm) {
        setTranslate(() => -containerWidth);
      } else if (notShowDelete) {
        setTranslate(() => 0);
      } else if (showDelete && !deleteWithoutConfirm) {
        setTranslate(() => (rtl ? 1 : -1) * deleteWidth);
      }
      setTouching(() => false);
      if (deleteWithoutConfirm) onDeleteClick();
    },
    [
      containerWidth,
      deleteWidth,
      deleteWithoutConfirmThreshold,
      onDeleteClick,
      rtl,
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
      id={id}
      className={`${classes.rstdi} ${
        deleting ? ` ${classes.deleting}` : ``
      } ${className}`}
      ref={container}
    >
      <div
        className={`${classes.delete} ${
          deleting ? ` ${classes.deleting}` : ""
        }`}
      >
        <button onClick={onDeleteClick}>Удалить</button>
      </div>
      <div
        className={`${classes.content} ${
          deleting ? ` ${classes.deleting}` : ""
        }${!touching ? ` ${classes.transition}` : ""}`}
        onMouseDown={onStart}
        onTouchStart={onStart}
      >
        <div className={classes.item}>{children}</div>
      </div>
    </div>
  );
};

export default SwipeToDelete;
