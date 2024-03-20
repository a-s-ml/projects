import { ArrowRightCircleIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { ForwardRefExoticComponent, SVGProps } from 'react';

interface IButtonIconConst {
  name: string;
  component: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

export const buttonIconConst: IButtonIconConst[] = [
  {
    name: 'send',
    component: ArrowRightCircleIcon,
  },
  {
    name: 'smile',
    component: FaceSmileIcon,
  },
];
