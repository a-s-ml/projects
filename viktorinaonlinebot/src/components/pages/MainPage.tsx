import SlidePage from "./SlidePage";
import { SetStateAction, useState } from "react";
import Logo from "../img/Logo.png";
import { useValidateQuery } from "../store/vik/vik.api";
import ErrorPage from "../ErrorPage";
import MainListItem from "../MainListItem";
import { IMenu } from "../../models/IMenu";

let menuitems: IMenu[] = [
  {
    id:   1,
    name: "groups",
    text: "Мои группы",
    count: 0
  },
  {
    id:   2,
    name: "questions",
    text: "Мои вопросы",
    count: 0
  },
  {
    id:   3,
    name: "answers",
    text: "Мои ответы",
    count: 0
  }
]

export function MainPage() {
  const tg = window.Telegram.WebApp;

  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
  } = useValidateQuery(tg.initData);

  if(dataUser) {
    console.log(dataUser)
    // menuitems[1].count = dataUser.groups
    // menuitems[2].count = dataUser.questions
    // menuitems[3].count = dataUser.answers
    console.log(menuitems)
  }


  const [slideState, setSlideState] = useState(false);

  const [slideData, setSlideData] = useState("");

  function openSlide(s: SetStateAction<string>) {
    setSlideState(!slideState);
    if (!slideState) {
      setSlideData(s);
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
            <ul className="mt-4">
              {errorUser && <ErrorPage />}
              {loadUser && (
                <b className="text-center text-[var(--tg-theme-text-color)]">
                  Loading...
                </b>
              )}
              {menuitems && menuitems.map(item => (
                <MainListItem key={item.id} item={item} toggleS={openSlide} />
              ))}
            </ul>
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
