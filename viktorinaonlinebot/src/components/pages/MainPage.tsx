import SlidePage from "./SlidePage";
import Logo from "../img/Logo.png";
import ErrorPage from "./ErrorPage";
import MenuList from "./menu/MenuList";
import { IMenu } from "../../models/IMenu";
import {
  selectSlidePatch,
  selectSlideUser,
  showSlide,
  userSlide,
} from "../store/api/slide.slice";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { useValidateQuery } from "../store/api/vik.api";
import { useGetTypeQuery } from "../store/api/type/type.api";
import { getAllType } from "../store/api/type/type.slice";
import { useGetTimeQuery } from "../store/api/period/period.api";
import { getAllPeriod } from "../store/api/period/period.slice";
import { useGetCategoryQuery } from "../store/api/category/category.api";
import { getAllCategories } from "../store/api/category/category.slice";
import Preloader from "../Preloader/Preloader";
import { useElevator } from "../hooks/useElevator";

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
  const user = useAppSelector(selectSlideUser);

  useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
    isSuccess: successUser,
  } = useValidateQuery(tg.initData, { skip: user !== 0 });

  const { data: allTypes, isSuccess: successType } = useGetTypeQuery("");
  const { data: allTime, isSuccess: successTime } = useGetTimeQuery("");
  const { data: allCategory, isSuccess: successCategory } =
    useGetCategoryQuery("");

  successUser && dispatch(userSlide(dataUser.UserData.user.id));

  successType && dispatch(getAllType(allTypes));
  successTime && dispatch(getAllPeriod(allTime));
  successCategory && dispatch(getAllCategories(allCategory));
  const pathSlide = useAppSelector(selectSlidePatch);
  // console.log(useAppSelector(store.getState));

  if (pathSlide.length === 1) {
    tg.BackButton.hide();
  } else {
    tg.BackButton.show();
    tg.onEvent("backButtonClicked", () => dispatch(showSlide(false))); 
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
          <div className="mt-10">
            {errorUser && <ErrorPage />}
            {loadUser && <Preloader />}
            {dataUser && (
              <ul
                role="list"
                className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
              >
                {menuitems.map((item) => (
                  <MenuList
                    key={item.id}
                    item={item}
                    progress={dataUser.ProgressData}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {dataUser && (
        <>
          <SlidePage chat={dataUser.UserData.user.id} />
        </>
      )}
    </>
  );
}
