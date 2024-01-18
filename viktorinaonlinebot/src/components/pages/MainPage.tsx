import SlidePage from "./SlidePage";
import Logo from "../img/Logo.png";
import ErrorPage from "./ErrorPage";
import MenuList from "./menu/MenuList";
import { IMenu } from "../../models/IMenu";
import ModalPage from "./ModalPage";
import { selectSlide, slideState, userSlide } from "../store/api/slide.slice";
import { store, useAppDispatch, useAppSelector } from "../store";
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
    isSuccess: successUser,
  } = useValidateQuery(tg.initData);

  const slide = useAppSelector(selectSlide);
  const modal = useAppSelector(selectModal);

  const { data: allTypes, isSuccess: successType } = useGetTypeQuery("");
  const { data: allTime, isSuccess: successTime } = useGetTimeQuery("");
  const { data: allCategory, isSuccess: successCategory } =
    useGetCategoryQuery("");

  successUser && dispatch(userSlide(dataUser.UserData.user.id));

  successType && dispatch(getAllType(allTypes));
  successTime && dispatch(getAllTime(allTime));
  successCategory && dispatch(getAllCategories(allCategory));

  console.log(useAppSelector(store.getState));

  if (!slide && !modal) {
    tg.BackButton.hide();
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

              <b className="text-center text-[var(--tg-theme-text-color)]">
                Loading...
              </b>

          </div>
        </div>
      </div>
      {successUser &&
        successUser &&
        successTime &&
        successCategory &&
        dataUser.validate && (
          <>
            <SlidePage chat={dataUser.UserData.user.id} />
            <ModalPage />
          </>
        )}
    </>
  );
}
