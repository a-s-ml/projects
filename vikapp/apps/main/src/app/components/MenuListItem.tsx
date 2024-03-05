import { menuItemsConst } from '@const';
import {
  SimpleListItem,
  SimpleListItemButtonRight,
  SimpleListItemIcon,
  SimpleListItemText,
} from '@components';
import { useBackButton } from '@utils';

export const MenuListItem = () => {
  const { setTypeSlide, setBackButtonState } = useBackButton();
  return (
    <>
      {menuItemsConst.map((item) => (
        <li
          className="cursor-pointer"
          onClick={() => {
            setBackButtonState(true);
            setTypeSlide('item.type');
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
