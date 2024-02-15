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
interface MenuListProps {
  slide: boolean;
  setSlide: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MenuList({setSlide, slide}: MenuListProps) {
  return (
    <>
      <ul
        role="list"
        className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
      >
        {menuitems.map((item) => (
          <MenuListItem key={item.id} item={item} slide={slide} setSlide={setSlide}/>
        ))}
      </ul>
    </>
  );
}
