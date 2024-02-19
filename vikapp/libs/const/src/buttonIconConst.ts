import {
  ArrowTopRightOnSquareIcon,
  ChartPieIcon,
  CheckBadgeIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { ForwardRefExoticComponent, SVGProps } from 'react';

interface IButtonIconConst {
  name: string;
  component: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

export const buttonIconConst: IButtonIconConst[] = [
  {
    name: 'add',
    component: PlusCircleIcon,
  },
  {
    name: 'delete',
    component: TrashIcon,
  },
  {
    name: 'edit',
    component: PencilSquareIcon,
  },
  {
    name: 'moderate',
    component: CheckBadgeIcon,
  },
  {
    name: 'send',
    component: ArrowTopRightOnSquareIcon,
  },
  {
    name: 'stat',
    component: ChartPieIcon,
  },
];
