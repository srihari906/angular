import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'General',
    lkey: "general",
    main: [
      {
        state: 'home',
        short_label: 'D',
        name: 'Home',
        type: 'sub',
        icon: 'ti-home',
        lkey: 'Home',
        children: [
          {
            state: 'dashboard',
            name: 'Dashboard',
            lkey: 'Dashboard'
          },
          {
            state: 'dashboard2',
            short_label: 'D',
            name: 'Dashboard2',
            type: 'link',
            icon: 'ti-user',
            lkey: 'Dashboard2'
          },
          {
            state: 'dashboard3',
            name: 'Dashboard3',
            lkey: 'Dashboard3'
          }
        ]

      },
      {
        state: 'forms',
        short_label: 'D',
        name: 'Forms',
        type: 'sub',
        icon: 'ti-layers',
        lkey: 'Forms',
        children: [
          {
            state: 'form1',
            name: 'Form1',
            lkey: 'Form1'
          }
        ]
      },
      {
        state: 'ui-elements',
        short_label: 'D',
        name: 'UI Elements',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        lkey: 'UI Elements',
        children: [
          {
            state: 'typography',
            name: 'Typography',
            lkey: 'Typography'
          }
        ]
      },
      {
        state: 'tables',
        short_label: 'D',
        name: 'Tables',
        type: 'sub',
        icon: 'ti-receipt',
        lkey: 'Tables',
        children: [
          {
            state: 'tables1',
            name: 'Tables1',
            lkey: 'tables1'
          }
        ]
      },
      {
        state: 'data-presentation',
        short_label: 'D',
        name: 'Data Presentation',
        type: 'sub',
        icon: 'ti-widgetized',
        lkey: 'Data Presentation',
        children: [
          {
            state: 'layer1',
            name: 'Layer1',
            lkey: 'Layer1'
          }
        ]
      }
    ]
  },
  {
    label: 'LIVE ON',
    lkey: 'liveon',
    name: 'LIVE ON',
    main: [
      {
        state: 'additional-pages',
        short_label: 'D',
        name: 'Additional Pages',
        type: 'sub',
        icon: 'ti-id-badge',
        lkey: 'Additional Pages'
      },
      {
        state: 'extras',
        short_label: 'D',
        name: 'Extras',
        type: 'sub',
        icon: 'ti-pencil-alt',
        lkey: 'Extras'
      },
      {
        state: 'landing-page',
        short_label: 'D',
        name: 'Landing Page',
        type: 'sub',
        icon: 'ti-mobile',
        lkey: 'Landing Page'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
