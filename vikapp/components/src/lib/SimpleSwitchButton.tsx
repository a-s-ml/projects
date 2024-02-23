import { Switch } from '@headlessui/react';
import { classNames } from '@utils';

interface SimpleSwitchButtonProps {
  label: string;
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SimpleSwitchButton = ({
  enabled,
  setEnabled,
  label,
}: SimpleSwitchButtonProps) => {
  return (
    <Switch.Group
      as="div"
      className="flex items-center justify-between pb-4 text-left"
    >
      <span className="flex flex-grow flex-col">
        <Switch.Label
          as="span"
          className="text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
          passive
        >
          {label}
        </Switch.Label>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled
            ? 'bg-[var(--tg-theme-accent-text-color)]'
            : 'bg-[var(--tg-theme-hint-color)]',
          'relative inline-flex h-4 w-9 flex-shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out border-solid border-1 border-sky-500'
          )}
        >
          <span
            className={classNames(
              enabled
                ? 'opacity-0 duration-100 ease-out'
                : 'opacity-100 duration-200 ease-in',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <svg
              className="h-2 w-2 text-red-500"
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
                ? 'opacity-100 duration-200 ease-in'
                : 'opacity-0 duration-100 ease-out',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <svg
              className="h-2 w-2 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </span>
      </Switch>
    </Switch.Group>
  );
};
