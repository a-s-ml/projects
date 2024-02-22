const tg = window.Telegram.WebApp;

interface IAnswers {
  id: number;
  name: string;
  value: string;
}
interface IValidationLengthForm {
  value: string | IAnswers[];
  lengthMin: number;
  lengthMax: number;
}

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

export const validationLengthForm = (data: IValidationLengthForm):boolean => {
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
  if (typeof data.value === 'object') {
    data.value.map((item) => {
      if (
        item.value.length < data.lengthMin ||
        item.value.length > data.lengthMax
      ) {
        return false;
      } else {
        return true;
      }
    });
  }
  return false;
};
