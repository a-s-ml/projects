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

export const validationLengthForm = (data: IValidationLengthForm): boolean => {
  console.log('data: ', data);
  if (typeof data.value === 'string') {
    console.log('string');
    if (
      data.value.length < data.lengthMin ||
      data.value.length > data.lengthMax
    ) {
      console.log('string length = ', data.value.length);
      console.log('false');
      return false;
    } else {
      console.log('string length = ', data.value.length);
      console.log('number = ', data.value);
      console.log('true');
      return true;
    }
  }
  if (typeof data.value === 'number') {
    console.log('number');
    if (data.value === 0) {
      console.log('number = ', data.value);
      console.log('false');
      return false;
    } else {
      console.log('number = ', data.value);
      console.log('true');
      return true;
    }
  }
  if (typeof data.value === 'object') {
    let x: number = 0;
    let res: boolean = false;
    console.log('data.value', data.value);
    console.log('data.value.length', data.value.length);
    console.log('object');
    console.log('res', res);
    console.log('x', x);
    data.value.map((item) => {
      if (
        item.value.length > data.lengthMin ||
        item.value.length < data.lengthMax
      ) {
        x++;
        console.log('object length = ', item.value.length);
      }
    });
    x === data.value.length ? (res = true) : (res = false);
    return res;
  }
  return false;
};
