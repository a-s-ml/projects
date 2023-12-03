import { ICounter } from "../models/ICounter";

interface CountersProps {
    counter: ICounter
}

export default function Counters({ counter }: CountersProps) {
    return (
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-pink-100">{counter.description}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-pink-100 sm:text-5xl">
                {new Intl.NumberFormat("ru-RU").format(counter.value)}
            </dd>
        </div>
    )
}