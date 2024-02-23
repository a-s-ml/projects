import {
  SimpleAccordionIcon,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';
import { typeNewQuizConst } from '../../const/settingsQuiz.const';

export const BotQuiz = () => {
  return (
    <>
      <ul
        role="list"
        className="divide-y divide-[var(--tg-theme-hint-color)] pt-9"
      >
        {typeNewQuizConst.map((item) => (
          <SimpleAccordionMain
            description={
              <>
                <SimpleAccordionIcon size={5}>
                  <item.icon />
                </SimpleAccordionIcon>
                <SimpleAccordionText>
                  <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                    {item.name}
                  </div>
                </SimpleAccordionText>
              </>
            }
            content={<item.component />}
          />
        ))}
      </ul>
      <div className="pb-12 mb-8"></div>
    </>
  );
};
