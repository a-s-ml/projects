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
    <nav className="flex items-center justify-center" aria-label="Progress">
      <p className="text-sm font-medium text-[var(--tg-theme-accent-text-color)]">
        Шаг {step} из {stepsCount}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.id}>
            {step.status === "complete" ? (
              <span className="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900"></span>
            ) : step.status === "current" ? (
              <span
                className="relative flex items-center justify-center"
                aria-current="step"
              >
                <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                  <span className="h-full w-full rounded-full bg-indigo-200" />
                </span>
                <span
                  className="relative block h-2.5 w-2.5 rounded-full bg-indigo-600"
                  aria-hidden="true"
                />
              </span>
            ) : (
              <span className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400"></span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
