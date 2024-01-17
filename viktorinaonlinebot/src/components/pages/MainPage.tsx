import SlidePage from "./SlidePage";
import Logo from "../img/Logo.png";
import ErrorPage from "../ErrorPage";
import MenuList from "../MenuList";
import { IMenu } from "../../models/IMenu";
import ModalPage from "./ModalPage";
import { selectSlide } from "../store/api/slide.slice";
import { useAppDispatch, useAppSelector } from "../store";
import { selectModal } from "../store/api/modal.slice";
import { useEffect } from "react";
import { useValidateQuery } from "../store/api/vik.api";
import { useGetTypeQuery } from "../store/api/type/type.api";
import { getAllType } from "../store/api/type/type.slice";
import { useGetTimeQuery } from "../store/api/time/time.api";
import { getAllTime } from "../store/api/time/time.slice";
import { useGetCategoryQuery } from "../store/api/category/category.api";
import { getAllCategories } from "../store/api/category/category.slice";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
  } = useValidateQuery(tg.initData);

  const slide = useAppSelector(selectSlide);
  const modal = useAppSelector(selectModal);

  const { data: allTypes } = useGetTypeQuery("");
  const { data: allTime } = useGetTimeQuery("");
  const { data: allCategory } = useGetCategoryQuery("");
  
  allTypes && dispatch(getAllType(allTypes))
  allTime && dispatch(getAllTime(allTime))
  allCategory && dispatch(getAllCategories(allCategory))

  // console.log(useAppSelector(store.getState));

  if (!slide && !modal) {
    tg.HapticFeedback.notificationOccurred("success");
    tg.BackButton.hide();
    tg.MainButton.hide();
  }

  return (
    <>
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
