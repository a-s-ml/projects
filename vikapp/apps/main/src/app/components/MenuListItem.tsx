import { useAppDispatch } from '@store/main';
import { showMainSlide, typeMain } from '../store/slices/mainApp.slice';
import { menuItemsConst } from '@const';
import {
  SimpleListItem,
  SimpleListItemButtonRight,
  SimpleListItemIcon,
  SimpleListItemText,
} from '@components';

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
          <SimpleListItem>
            <SimpleListItemIcon>
              <item.component
                className="h-6 w-6 text-[var(--tg-theme-accent-text-color)]"
                aria-hidden="true"
              />
            </SimpleListItemIcon>
            <SimpleListItemText
              text={item.text}
              description={item.description}
            />
            <SimpleListItemButtonRight />
          </SimpleListItem>
        </li>
      ))}
    </>
  );
};
