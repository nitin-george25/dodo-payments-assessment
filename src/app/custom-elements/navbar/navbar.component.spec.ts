import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { NavbarComponent } from "./navbar.component";
import { ElementRef } from "@angular/core";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, MatIconModule], // Include standalone component and necessary modules
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus the input element on Command/Ctrl + /', () => {
    const focusSpy = jasmine.createSpy('focus');
    component.inputElementRef = { nativeElement: { focus: focusSpy } } as ElementRef;

    const event = new KeyboardEvent('keydown', {
      key: '/',
      metaKey: true,
    });

    component.handleKeyboardEvent(event);
    expect(focusSpy).toHaveBeenCalled();
  });

  it('should blur the input element when Escape key is pressed', () => {
    const blurSpy = jasmine.createSpy('blur');
    component.inputElementRef = { nativeElement: { blur: blurSpy } } as ElementRef;

    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
    });

    component.handleKeyboardEvent(event);
    expect(blurSpy).toHaveBeenCalled();
  });

  it('should not focus the input element on other key combinations', () => {
    const focusSpy = jasmine.createSpy('focus');
    component.inputElementRef = { nativeElement: { focus: focusSpy } } as ElementRef;

    const event = new KeyboardEvent('keydown', {
      key: 'A',
      metaKey: true,
    });

    component.handleKeyboardEvent(event);
    expect(focusSpy).not.toHaveBeenCalled();
  });
});
