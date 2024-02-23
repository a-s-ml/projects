import {
  SimpleAccordionIcon,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';
import { typeNewQuizConst } from '../../const/settingsQuiz.const';

export const BotQuiz = () => {
  return (
    <>
      {typeNewQuizConst.map((item) => (
        <SimpleAccordionMain
          description={
            <>
              <SimpleAccordionIcon size={10}>
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
    </>
  );
};
