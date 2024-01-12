import SlidePage from "./SlidePage";
import Logo from "../img/Logo.png";
import { useValidateQuery } from "../store/api/vik.api";
import ErrorPage from "../ErrorPage";
import MenuList from "../MenuList";
import { IMenu } from "../../models/IMenu";
import ModalPage from "./ModalPage";
import { selectSlide } from "../store/api/slide.slice";
import { useAppSelector } from "../store";
import { selectModal } from "../store/api/modal.slice";
import { useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

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

  useEffect(() => {
    tg.expand();
    tg.ready();
    tg.SettingsButton.show();
  }, []);

  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
  } = useValidateQuery(tg.initData);

  const slide = useAppSelector(selectSlide);
  const modal = useAppSelector(selectModal);

  if (!slide && !modal) {
    tg.HapticFeedback.notificationOccurred("success");
    tg.BackButton.hide();
    tg.MainButton.hide();
  }

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
          </div>
          <div className="flex">
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        </nav>
      </header>
      <div className="container p-6 mx-auto">
        <div className="mx-auto max-w-lg">
          <div>
            <div className="text-center">
              <img
                className="mx-auto h-12 w-12"
                src={Logo}
                alt="https://80q.ru"
              />
              <h2 className="mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]">
                ViktorinaOnlineBot
              </h2>
              <p className="mt-1 text-sm text-[var(--tg-theme-hint-color)]">
                Бот проводит викторины в группах/каналах используя собственную
                базу вопросов и вопросы, заданные участниками викторины
              </p>
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
                <ul
                  role="list"
                  className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
                >
                  {menuitems &&
                    menuitems.map((item) => (
                      <MenuList
                        key={item.id}
                        item={item}
                        progress={dataUser.ProgressData}
                      />
                    ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      {dataUser && (
        <>
          <SlidePage chat={dataUser.UserData.user.id} />
          <ModalPage />
        </>
      )}
    </>
  );
}
