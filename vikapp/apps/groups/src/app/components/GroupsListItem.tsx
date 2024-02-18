import { useGetGroupDbQuery, useGetInfoGroupsQuery } from '@api/group';
import GroupAvatar from './GroupAvatar';
import {
  DeleteButton,
  SimpleAccordionIcon,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';

interface GroupsListItemProps {
  group: bigint;
}

export default function GroupsListItem({ group }: GroupsListItemProps) {
  const tg = window.Telegram.WebApp;
  const { isError: errorGroupInfo, data: dataGroupInfo } =
    useGetInfoGroupsQuery(group);
  const { data: GroupDb } = useGetGroupDbQuery(group);

  function deleteGroup(b: boolean) {
    if (b) return tg.openTelegramLink('https://t.me/more_details');
    return;
  }
  const deleteGroupText: string = `Вы действительно хотите удалить бота из группы ${
    dataGroupInfo?.username ? dataGroupInfo.username : dataGroupInfo?.title
  }`;

  return (
    <>
      {errorGroupInfo && <li>error</li>}
      {dataGroupInfo && GroupDb && (
        <li className="cursor-pointer">
          <SimpleAccordionMain
            description={
              <>
                <SimpleAccordionIcon size={10}>
                  {dataGroupInfo.photo?.small_file_id && (
                    <GroupAvatar id={dataGroupInfo.photo?.small_file_id} />
                  )}
                  {!dataGroupInfo.photo?.small_file_id && (
                    <img
                      className="inline-block w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
                      alt={dataGroupInfo.title}
                    />
                  )}
                </SimpleAccordionIcon>
                <SimpleAccordionText>
                  <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                    {dataGroupInfo.title}
                  </div>
                  {dataGroupInfo.username && (
                    <p className="text-sm text-[var(--tg-theme-hint-color)]">
                      @{dataGroupInfo.username}
                    </p>
                  )}
                </SimpleAccordionText>
              </>
            }
            content={
              <>
                <DeleteButton func={deleteGroup} text={deleteGroupText} />
                <p>Модерировать</p>
                <p>Статистика</p>
              </>
            }
          />
        </li>
      )}
    </>
  );
}
