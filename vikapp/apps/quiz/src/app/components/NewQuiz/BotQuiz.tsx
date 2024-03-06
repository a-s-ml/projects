import {
  Preloader,
  SimpleAccordionIcon,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';
import { typeNewQuizConst } from '../../const/settingsQuiz.const';
import { Suspense } from 'react';

export const BotQuiz = () => {
  return (
    <>
      <ul
        role="list"
        className="divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      >
        {typeNewQuizConst.map((item) => (
          <SimpleAccordionMain
            key={item.id}
            description={
              <>
                <SimpleAccordionIcon size={5}>
                  <item.icon
                    className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                    aria-hidden="true"
                  />
                </SimpleAccordionIcon>
                <SimpleAccordionText>
                  <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                    {item.name}
                  </div>
                </SimpleAccordionText>
              </>
            }
            content={
              <Suspense fallback={<Preloader />}>
                <item.component />
              </Suspense>
            }
          />
        ))}
      </ul>
      <div className="pb-12 mb-8"></div>
    </>
  );
};
