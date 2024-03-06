const tg = window.Telegram.WebApp;

interface IAnswers {
  id: number;
  name: string;
  value: string;
}
interface IValidationLengthForm {
  value: string | number | IAnswers[];
  lengthMin: number;
  lengthMax: number;
}

interface IAddQuestionFront {
  text: string;
  category: number;
  answers: IAnswers[];
  answerright: number;
}

interface IAddQuestionBack {
  chat: bigint;
  text: string;
  category: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerright: number;
}

let getAddQuestion: IAddQuestionBack;

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const addGroup = () => {
  tg.openTelegramLink('https://t.me/ViktorinaOnlineBot?startgroup=add');
};

export const inDevelopment = () => {
  tg.showAlert(
    'Данная функция находится в разработке',
    console.log('inDevelopment')
  );
};

export const deleteGroup = (b: boolean) => {
  if (b) return tg.openTelegramLink('https://t.me/more_details');
  return;
};

export const deleteQuestion = (b: boolean) => {
  if (b) return tg.openTelegramLink('https://t.me/more_details');
  return;
};

export const convertQuestionFrontToBack = (
  user: bigint,
  q: IAddQuestionFront
) => {
  getAddQuestion.chat = user;
  getAddQuestion.text = q.text;
  getAddQuestion.category = q.category;
  getAddQuestion.answer1 = q.answers[0].value;
  getAddQuestion.answer2 = q.answers[1].value;
  getAddQuestion.answer3 = q.answers[2].value;
  getAddQuestion.answer4 = q.answers[3].value;
  getAddQuestion.answerright = q.answerright;
  console.log(getAddQuestion);
  return getAddQuestion;
};

export const validationLengthForm = (data: IValidationLengthForm): boolean => {
  if (typeof data.value === 'string') {
    if (
      data.value.length < data.lengthMin ||
      data.value.length > data.lengthMax
    ) {
      return false;
    } else {
      return true;
    }
  }
  if (typeof data.value === 'number') {
    if (data.value === 0) {
      return false;
    } else {
      return true;
    }
  }
  if (typeof data.value === 'object') {
    let x: number = 0;
    let res: boolean = false;
    data.value.map((item) => {
      if (
        item.value.length >= data.lengthMin &&
        item.value.length < data.lengthMax
      ) {
        x++;
      }
    });
    x === data.value.length ? (res = true) : (res = false);
    return res;
  }
  return false;
};
