import { MenuListItem } from './MenuList/MenuListItem';

export const MenuList = () => {
  return (
    <ul
      role="list"
      className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
    >
      <MenuListItem />
    </ul>
  );
};
