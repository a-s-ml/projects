interface StepsFormProps {
  step: number;
  stepsCount: number;
}

interface Steps {
  id: number;
  status: string;
}

export default function StepsForm({ step, stepsCount }: StepsFormProps) {
  let steps: Steps[] = [];

  for (let i = 0; i < stepsCount; i++) {
    steps.push({
      id: i,
      status: step > i ? "complete" : "upcoming",
    });
  }

  return (
    <nav className="flex items-center px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 justify-center" aria-label="Progress">
      <p className="text-sm font-medium text-[var(--tg-theme-accent-text-color)]">
        Шаг {step} из {stepsCount}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.id}>
            {step.status === "complete" ? (
              <span className="block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-accent-text-color)]"></span>
            ) : step.status === "current" ? (
              <span
                className="relative flex items-center justify-center"
                aria-current="step"
              >
                <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                  <span className="h-full w-full rounded-full bg-[var(--tg-theme-text-color)]" />
                </span>
                <span
                  className="relative block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-accent-text-color)]"
                  aria-hidden="true"
                />
              </span>
            ) : (
              <span className="block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-text-color)]"></span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
