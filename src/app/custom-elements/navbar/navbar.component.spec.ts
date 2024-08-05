import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, MatIconModule],
      declarations: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus the input element on Command/Ctrl + /', () => {
    const inputElementRef = jasmine.createSpyObj('ElementRef', ['focus']);
    component.inputElementRef = inputElementRef;

    const event = new KeyboardEvent('keydown', {
      key: '/',
      metaKey: true,
    });

    component.handleKeyboardEvent(event);
    expect(inputElementRef.nativeElement.focus).toHaveBeenCalled();
  });

  it('should blur the input element when Escape key is pressed', () => {
    const inputElementRef = jasmine.createSpyObj('ElementRef', ['blur']);
    component.inputElementRef = inputElementRef;

    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
    });

    component.handleKeyboardEvent(event);
    expect(inputElementRef.nativeElement.blur).toHaveBeenCalled();
  });

  it('should not focus the input element on other key combinations', () => {
    const inputElementRef = jasmine.createSpyObj('ElementRef', ['focus']);
    component.inputElementRef = inputElementRef;

    const event = new KeyboardEvent('keydown', {
      key: 'A',
      metaKey: true,
    });

    component.handleKeyboardEvent(event);
    expect(inputElementRef.nativeElement.focus).not.toHaveBeenCalled();
  });
});
