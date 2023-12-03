export default function Spiner() {
    return (
        <div
        className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-violet-500 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        </div>
    )
}