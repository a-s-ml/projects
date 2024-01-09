import { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Active() {
  const [active, setEnabled] = useState(false);
  return (
    <>
      <div className="group relative flex items-start space-x-3">
        <div className="min-w-0 flex">
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div
                className={classNames(
                  active ? "bg-emerald-500" : "bg-red-500",
                  "h-1.5 w-1.5 rounded-full"
                )}
              />
            </div>
            <p
              className={classNames(
                active ? "bg-emerald-500" : "bg-red-500",
                "text-xs leading-5"
              )}
            >
              Активна
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
