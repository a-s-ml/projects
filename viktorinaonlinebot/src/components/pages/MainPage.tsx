import { useGetMenuQuery } from "../store/vik/vik.api";
import MainListItem from "../MainListItem";
import SlidePage from "./SlidePage";
import { SetStateAction, useEffect, useState } from "react";
import ErrorPage from "../ErrorPage";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png"

export function MainPage() {

    const tg = window.Telegram.WebApp

    const { isLoading: loadMenu, isError: errorMenu, data: menuitems } = useGetMenuQuery('main')

    const [slideState, setSlideState] = useState(false)

    const [slideData, setSlideData] = useState('')

    useEffect(() => {
        axios.post("https://api80q.ru/validate", { initData: tg.initData })
            .then((res) => console.log(res.data))
            .catch(() => console.log('error'))
    }, [])

    function openSlide(s: SetStateAction<string>) {
        setSlideState(!slideState)
        if (!slideState) {
            setSlideData(s)
        }
    }

    return (
        <>
            <div className="container p-6 mx-auto">
                <div className="mx-auto max-w-lg">
                    <div>
                        <div className="text-center">
                                <img className="mx-auto h-12 w-12" src={Logo} />
                            
                            <h2 className="mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]">ViktorinaOnlineBot</h2>
                            <p className="mt-1 text-sm text-[var(--tg-theme-hint-color)]">
                                Бот проводит викторины в ваших группах/каналах используя огромную базу вопросов
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <ul className="mt-4">
                            {errorMenu && <ErrorPage />}
                            {loadMenu && <b className="text-center text-[var(--tg-theme-text-color)]">Loading...</b>}
                            {menuitems?.map(item =>
                                <MainListItem key={item.id} item={item} toggleS={openSlide} />
                            )}
                            <Link to="/Category">
                                <button>Category List</button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

            <SlidePage toggleStateS={slideState} toggleS={openSlide} slideData={slideData} />
        </>
    )
}