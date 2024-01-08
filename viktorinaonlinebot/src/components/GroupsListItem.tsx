import { Cog8ToothIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import {
  useGetInfoActiveGroupsQuery,
  useGetInfoGroupsQuery,
} from "./store/api/groups.slice";
import GroupAvatar from "./GroupAvatar";
import { useAppDispatch } from "./store";
import { showModal, dataModal } from "./store/api/modal.slice";
import Active from "./Active";
import NotActive from "./notActive";
import TypeQuestion from "./TypeQuestion";
import TimeQuestion from "./TimeQuestion";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface GroupsListItemProps {
  group: number;
  questionType: number;
  time: number;
}

export default function GroupsListItem({
  group,
  questionType,
  time,
}: GroupsListItemProps) {
  const {
    isLoading: loadGroupsInfo,
    isError: errorGroupInfo,
    data: dataGroupInfo,
  } = useGetInfoGroupsQuery(group);
  const { data: dataGroupActive } = useGetInfoActiveGroupsQuery(group);

  const dispatch = useAppDispatch();

  return (
    <>
      {errorGroupInfo && <li>error</li>}
      {dataGroupInfo && (
        <li className="overflow-hidden rounded-xl border border-gray-200">
        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
          <img

            className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
          />
          <div className="text-sm font-medium leading-6 text-gray-900">vzzvzcxv</div>
          <Menu as="div" className="relative ml-auto">
            <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open options</span>
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <Menu.Item>

                    <a
                      href="#"
                      className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                      View<span className="sr-only">zxczvxcvxc</span>
                    </a>

                </Menu.Item>
                <Menu.Item>
                    <a
                      href="#"
                      className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                      Edit<span className="sr-only">, sdfgsfdgsdgf</span>
                    </a>

                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Last invoice</dt>
            <dd className="text-gray-700">
              <time dateTime='ddfbsz'>bzvzczvc</time>
            </dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Amount</dt>
            <dd className="flex items-start gap-x-2">
              <div className="font-medium text-gray-900">zzcvcxv</div>
              <div
                className= 'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'>
                sfdgsfdgg
              </div>
            </dd>
          </div>
        </dl>
      </li>
      )}
    </>
  );
}
