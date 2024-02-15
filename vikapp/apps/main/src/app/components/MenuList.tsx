import { IMenu } from '@models';
import MenuListItem from './MenuListItem';

let menuitems: IMenu[] = [
  {
    id: 1,
    name: 'quiz',
    text: 'Мои викторины',
  },
  {
    id: 2,
    name: 'groups',
    text: 'Мои группы',
  },
  {
    id: 3,
    name: 'questions',
    text: 'Мои вопросы',
  },
  {
    id: 4,
    name: 'answers',
    text: 'Мои ответы',
  },
];

export default function MenuList() {
  return (
    <>
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
      >
        {menuitems.map((item) => (
          <MenuListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
