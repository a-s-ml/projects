interface TypeQuestionProps {
  questionType: number;
}
export default function TypeQuestion({questionType} :TypeQuestionProps) {
  return (
    <div className="group relative flex items-start space-x-3">
      <div className="min-w-0 flex">
        <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">Тип вопроса:</span>
        <div className="mt-1 flex items-center gap-x-1.5">
          <p className="text-xs leading-5 text-emerald-500">{questionType}</p>
        </div>
      </div>
    </div>
  );
}
