import { useAppDispatch } from '@store/main';
import { showMainSlide, typeMain } from '../../store/slices/mainApp.slice';
import { MenuListItemButton } from './MenuListItemButton';
import { MenuListItemText } from './MenuListItemText';
import { MenuListItemIcon } from './MenuListItemIcon';
import { menuItemsConst } from '@const';

export const MenuListItem = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      {menuItemsConst.map((item) => (
        <li
          className="cursor-pointer"
          onClick={() => {
            dispatch(showMainSlide(true));
            dispatch(typeMain(item.type));
          }}
        >
          <div className="group relative flex items-start space-x-3 py-4">
            <MenuListItemIcon>
              <item.component
                className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            </MenuListItemIcon>
            <MenuListItemText text={item.text} description={item.description} />
            <MenuListItemButton />
          </div>
        </li>
      ))}
    </>
  );
};
