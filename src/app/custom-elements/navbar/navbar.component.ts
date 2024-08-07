import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { NavItem } from '../../app.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('inputElement') inputElementRef: ElementRef | undefined;

  @Input() currentPage: NavItem = { path: '', label: '', icon: 'error' };

  constructor() {}

  @HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent): void {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  if ((isMac && event.metaKey && event.key === '/') || (!isMac && event.ctrlKey && event.key === '/')) {
    event.preventDefault();
    this.focusInput();
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    this.blurInput();
  }
}

  focusInput(): void {
    if (this.inputElementRef) {
      this.inputElementRef.nativeElement?.focus();
    }
  }

  blurInput(): void {
    if (this.inputElementRef) {
      this.inputElementRef.nativeElement?.blur();
    }
  }
}
