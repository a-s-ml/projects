import SlidePage from "./SlidePage";
import { SetStateAction, useState } from "react";
import Logo from "../img/Logo.png";
import { useValidateQuery } from "../store/vik/vik.api";
import ErrorPage from "../ErrorPage";
import { useGetGroupsQuery } from "../store/vik/groupsSlise";

let idUser: number = 521884639

export function MainPage() {
  const tg = window.Telegram.WebApp;

  if (!tg.initData) {
    tg.initData =
      "user=%7B%22id%22%3A521884639%2C%22first_name%22%3A%22Anton%20S%22%2C%22last_name%22%3A%22Melentyev%22%2C%22username%22%3A%22a_s_ml%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-2554096703205094829&chat_type=private&auth_date=1703698298&hash=2256f0772acb9047eeffb53ea871ae23405dbeb2a77996d181107c8a445650fb";
  }


  const {
    isLoading: loadUser,
    isError: errorUser,
    data: dataUser,
  } = useValidateQuery(tg.initData);

  if (dataUser) {
    idUser = dataUser.user.id;
  }

  const {
    isLoading: loadGroups,
    isError: errorGroup,
    data: dataGroup,
  } = useGetGroupsQuery(idUser);

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
            </ul>
          </div>
        </div>
      </div>

      <SlidePage
        toggleStateS={slideState}
        toggleS={openSlide}
        slideData={slideData}
      />
    </>
  );
}
