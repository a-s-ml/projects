import { IMenu, IProgressData, IUser } from '@models';
import { useAppSelector } from '@store/main';
import { selectSlideUser } from '../store/slices/slide.slice';
import MenuListItem from './MenuListItem';

let menuitems: IMenu[] = [
  {
    id: 1,
    name: 'groups',
    text: 'Мои группы',
  },
  {
    id: 2,
    name: 'questions',
    text: 'Мои вопросы',
  },
  {
    id: 3,
    name: 'answers',
    text: 'Мои ответы',
  },
];

interface MenuListProps {
  data: IProgressData;
}

export default function MenuList({ data }: MenuListProps) {
  return (
    <>
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
      >
        {menuitems.map((item) => (
          <MenuListItem key={item.id} item={item} progress={data} />
        ))}
      </ul>
    </>
  );
}
