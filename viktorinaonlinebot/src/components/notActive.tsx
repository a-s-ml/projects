import ToggleButton from "./ToggleButton";

export default function NotActive() {
  return (
    <>
      <div className="group relative flex items-start space-x-3">
        <div className="min-w-0 flex">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
            </div>
            <p className="text-xs leading-5 text-red-500">Нактивна</p>
          </div>
        </div>
      </div>
      <ToggleButton />
    </>
  );
}
