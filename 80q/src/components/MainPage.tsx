import Counters from "./Counters"
import Spiner from "./Spiner"
import { useGetCountersQuery } from "./store/vik/vik.api"

export default function MainPage() {

  const { isLoading, isError, data } = useGetCountersQuery('landing', {
    pollingInterval: 2000,
  })

  return (
    <>
      <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <img />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-100 sm:text-5xl">We are creating reactive Telegram bots</h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://t.me/more_details" target="_blank" rel="noreferrer" className="text-sm font-semibold text-pink-100">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="py-12 sm:py-12y">
          {isError && <Spiner />}
          {isLoading && <Spiner />}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">

              {data && data.map(counter =>
                <Counters key={counter.id} counter={counter} />
              )}
            </dl>
          </div>
        </div>
      </main>
    </>
  )
}