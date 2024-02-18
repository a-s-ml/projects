import React, { ForwardRefExoticComponent, SVGProps } from 'react';

export interface IMenu {
  id: number;
  text: string;
  description: string;
  component: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}
