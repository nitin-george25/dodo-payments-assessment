import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';

import { NzTimelineModule } from 'ng-zorro-antd/timeline';

import { NavbarComponent } from './custom-elements/navbar/navbar.component';

export interface NavItem {
  path: string;
  icon?: string;
  label: string;
  children?: NavItem[];
}

interface Notification {
  message: string;
  timestamp: Date;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatSortModule,
    NavbarComponent,
    NzTimelineModule,
    ReactiveFormsModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dodopayments-assessment';
  currentPage: NavItem = {
    path: '/',
    label: 'Overview',
    icon: 'rocket_launch',
  };

  navItems: NavItem[] = [
    { path: '/', icon: 'rocket_launch', label: 'Overview' },
    { path: '/transactions', icon: 'paid', label: 'Transactions' },
    { path: '/invoices', icon: 'receipt', label: 'Invoices' },
    { path: '/customers', icon: 'group', label: 'Customers' },
    {
      path: '/product-catalogue',
      icon: 'qr_code_scanner',
      label: 'Product Catalogue',
      children: [
        {
          path: '/transactions/overivew',
          label: 'Overview',
        },
        {
          path: '/transactions/products',
          label: 'Products',
        },
        {
          path: '/transactions/discounts',
          label: 'Discounts',
        },
        {
          path: '/transactions/taxable-items',
          label: 'Taxable Items',
        },
      ],
    },
    { path: '/reports', icon: 'summarize', label: 'Reports' },
    { path: '/checkout', icon: 'shopping_basket', label: 'Checkout' },
    {
      path: '/business-account',
      icon: 'book',
      label: 'Business Account',
    },
    {
      path: '/developer-tools',
      icon: 'settings',
      label: 'Developer Tools',
    },
  ];

  notifications: Notification[] = [
    {
      message: 'Your account is about to expire',
      timestamp: new Date(),
      icon: 'warning',
    },
    {
      message: 'New transaction received',
      timestamp: new Date(),
      icon: 'paid',
    },
    {
      message: 'New invoice received',
      timestamp: new Date(),
      icon: 'receipt',
    },
  ];

  timeLineData: Notification[] = [
    {
      message: 'Your account is about to expire',
      timestamp: new Date(),
      icon: 'warning',
    },
    {
      message: 'New transaction received',
      timestamp: new Date(),
      icon: 'paid',
    },
    {
      message: 'New invoice received',
      timestamp: new Date(),
      icon: 'receipt',
    },
  ];

  constructor() {}
}
