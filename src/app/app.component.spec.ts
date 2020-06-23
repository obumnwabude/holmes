import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { TestBed, async, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';

const eventSub = new BehaviorSubject<any>(null);
export class routerStub {
  events = eventSub;
}

describe('AppComponent', () => {
  const homeNav: NavigationEnd = new NavigationEnd(1, '/', '/');
  const districtNav: NavigationEnd = new NavigationEnd(
    2,
    '/districts',
    '/districts'
  );
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useClass: routerStub }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit('should create the app', () => {
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'Holmes'`, () => {
    expect(app.title).toEqual('Holmes');
  });

  xit('should render title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#holmes-display h1').textContent).toContain(
      'Holmes'
    );
  });

  xit('should have first have isHomePage true since it first loads home page', async(() => {
    //TestBed.inject(Router).events.next(homeNav);
    tick();
    fixture.detectChanges();
    expect(app.isHomePage).toBeTrue();
  }));
});
