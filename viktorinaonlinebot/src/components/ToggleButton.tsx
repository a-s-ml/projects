import { useState } from "react";
import { Switch } from "@headlessui/react";
import {
  useDeleteActiveGroupsMutation,
  useSetActiveGroupsMutation,
} from "./store/api/groups.slice";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface ToggleButtonProps {
  group: bigint;
  state: boolean;
}

export default function ToggleButton({ group, state }: ToggleButtonProps) {
  const [enabled, setEnabled] = useState(state);
  const [setActive, {}] = useSetActiveGroupsMutation();
  const [deleteActive, {}] = useDeleteActiveGroupsMutation();
  const tg = window.Telegram.WebApp;

  const useSetStatusActive = async () => {
    if (!enabled) {
      await setActive(group);
      tg.HapticFeedback.notificationOccurred("success");
    }
    if (enabled) {
      deleteActive(group);
      tg.HapticFeedback.notificationOccurred("error");
    }
    setEnabled(!enabled);
  };

  return (
    <>
      <div className="group relative flex items-start space-x-3">
        <div className="min-w-0 flex">
          <div className="mt-1 flex items-center gap-x-1.5">
            <p
              className={classNames(
                enabled ? "text-emerald-500" : "text-red-500",
                "text-xs leading-5"
              )}
            >
              {enabled ? "Вкл" : "Выкл"}
            </p>
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div
                className={classNames(
                  enabled ? "bg-emerald-500 animate-ping opacity-75" : "bg-red-500",
                  "h-1.5 w-1.5 rounded-full"
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <Switch
        checked={enabled}
        onChange={useSetStatusActive}
        className={classNames(
          enabled
            ? "bg-[var(--tg-theme-accent-text-color)]"
            : "bg-[var(--tg-theme-hint-color)]",
          "relative inline-flex h-4 w-9 flex-shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 ease-in-out"
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-[var(--tg-theme-text-color)] shadow ring-0 transition duration-200 ease-in-out"
          )}
        >
          <span
            className={classNames(
              enabled
                ? "opacity-0 duration-100 ease-out"
                : "opacity-100 duration-200 ease-in",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <svg
              className="h-2 w-2 text-gray-400"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={classNames(
              enabled
                ? "opacity-100 duration-200 ease-in"
                : "opacity-0 duration-100 ease-out",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <svg
              className="h-2 w-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </span>
      </Switch>
    </>
  );
}
