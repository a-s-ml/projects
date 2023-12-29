import SlidePage from "./SlidePage";
import { SetStateAction, useState } from "react";
import Logo from "../img/Logo.png";
import { useValidateQuery } from "../store/api/vik.api";
import ErrorPage from "../ErrorPage";
import MenuList from "../MenuList";
import { IMenu } from "../../models/IMenu";
import { IValidate } from "../../models/IUser";

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

type KeyIMenu = keyof IMenu
type KeyIValidate = keyof IValidate

export function MainPage() {
  const tg = window.Telegram.WebApp;

  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
  } = useValidateQuery(tg.initData);

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
            </div>
          </div>
          <div className="mt-10">
            {errorUser && <ErrorPage />}
            {loadUser && (
              <b className="text-center text-[var(--tg-theme-text-color)]">
                Loading...
              </b>
            )}
            {dataUser && (
              <ul className="mt-4">
                {menuitems &&
                  menuitems.map((item) => (
                    <MenuList
                      key={item.id}
                      item={item}
                      // count={dataUser[item.name as KeyIValidate]}
                      toggleS={openSlide}
                    />
                  ))}
              </ul>
            )}
          </div>
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
