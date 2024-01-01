import SlidePage from "./SlidePage";
import { SetStateAction, useState } from "react";
import Logo from "../img/Logo.png";
import { useValidateQuery } from "../store/api/vik.api";
import ErrorPage from "../ErrorPage";
import MenuList from "../MenuList";
import { IMenu } from "../../models/IMenu";
import { useAppSelector, useAppDispatch } from "../store";
import {
  decrement,
  increment,
  isVisible,
  incrementByAmount,
  selectCount,
  selectVisible,
  isVis,
  isnotVis,
} from "../store/features/counter/counterSlice";

let menuitems: IMenu[] = [
  {
    id: 1,
    name: "groups",
    text: "Мои группы",
  },
  {
    id: 2,
    name: "questions",
    text: "Мои вопросы",
  },
  {
    id: 3,
    name: "answers",
    text: "Мои ответы",
  },
];

export function MainPage() {
  const tg = window.Telegram.WebApp;
  tg.expand()

  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
  } = useValidateQuery(tg.initData);

  if (dataUser) {
    console.log(dataUser);
  }

  const [slideState, setSlideState] = useState(false);

  const [slideData, setSlideData] = useState("");

  function openSlide(s: SetStateAction<string>) {
    setSlideState(!slideState);
    if (!slideState) {
      tg.BackButton.show();
      setSlideData(s);
    }
    if (slideState) {
      tg.BackButton.hide();
    }
  }

  const count = useAppSelector(selectCount);
  const visible = useAppSelector(selectVisible);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <div className="container p-6 mx-auto">
        <div className="mx-auto max-w-lg">
          <div>
            <div className="text-center">
              <img className="mx-auto h-12 w-12" src={Logo} />
              <h2 className="mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]">
                ViktorinaOnlineBot
              </h2>
              <p className="mt-1 text-sm text-[var(--tg-theme-hint-color)]">
                Бот проводит викторины в группах/каналах используя собственную
                базу вопросов и вопросы, заданные участниками викторины
              </p>
              <span className="text-sm font-medium text-[var(--tg-theme-text-color)]">{String(visible)}</span><br></br>
              <span className="text-sm font-medium text-[var(--tg-theme-text-color)]">{count}</span><br></br>
      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      /><br></br>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--tg-theme-text-color)]"
        onClick={() => dispatch(isVisible)}
      >
        Visible
      </button><br></br>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--tg-theme-text-color)]"
        onClick={() => dispatch(isVis)}
      >
        isVis
      </button><br></br>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--tg-theme-text-color)]"
        onClick={() => dispatch(isnotVis)}
      >
        isNotVis
      </button><br></br>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--tg-theme-text-color)]"
        onClick={() => dispatch(incrementByAmount(incrementValue))}
      >
        Add Amount
      </button><br></br>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--tg-theme-text-color)]"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        - Add
      </button><br></br>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--tg-theme-text-color)]"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        + Add
      </button>
            </div>
          </div>
          {dataUser && (
            <div className="mt-10">
              {errorUser && <ErrorPage />}
              {loadUser && (
                <b className="text-center text-[var(--tg-theme-text-color)]">
                  Loading...
                </b>
              )}
              {dataUser.validate && (
                <ul className="mt-4">
                  {menuitems &&
                    menuitems.map((item) => (
                      <MenuList
                        key={item.id}
                        item={item}
                        progress={dataUser.ProgressData}
                        toggleS={openSlide}
                      />
                    ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      {dataUser && (
        <SlidePage
          toggleStateS={slideState}
          toggleS={openSlide}
          slideData={slideData}
          chat={dataUser.UserData.user.id}
        />
      )}
    </>
  );
}
