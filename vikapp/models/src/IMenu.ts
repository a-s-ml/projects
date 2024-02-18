import React, { ForwardRefExoticComponent, SVGProps } from 'react';

export interface IMenu {
  id: number;
  text: string;
  type: string;
  description: string;
  component: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}
