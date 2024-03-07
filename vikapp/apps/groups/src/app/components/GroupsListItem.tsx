import { deleteGroup, inDevelopment } from '@utils';
import GroupAvatar from './GroupAvatar';
import {
  ButtonIcon,
  ButtonIconConfirm,
  SimpleAccordionIcon,
  SimpleAccordionMain,
  SimpleAccordionText,
} from '@components';
import { useGetGroupDbQuery, useGetInfoGroupsQuery } from '@api/group';

interface GroupsListItemProps {
  group: bigint;
}

export default function GroupsListItem({ group }: GroupsListItemProps) {
  const tg = window.Telegram.WebApp;
  const { isError: errorGroupInfo, data: dataGroupInfo } =
    useGetInfoGroupsQuery(group);
  const { data: GroupDb } = useGetGroupDbQuery(group);
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
                <ButtonIcon
                  firstIcon={true}
                  text={'Статистика'}
                  color={'[var(--tg-theme-accent-text-color)]'}
                  icon={'stat'}
                  func={inDevelopment}
                />
                <ButtonIconConfirm
                  firstIcon={true}
                  text={'Удалить'}
                  color={'red-500'}
                  icon={'delete'}
                  func={deleteGroup}
                  textConfirm={`Вы действительно хотите удалить бота из группы ${
                    dataGroupInfo?.username
                      ? dataGroupInfo.username
                      : dataGroupInfo?.title
                  }`}
                />
              </>
            }
          />
        </li>
      )}
    </>
  );
}
