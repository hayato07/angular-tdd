import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should see the current count.', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.count).toEqual(0);
  });

  it('should increment the count.', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    expect(app.count).toEqual(1);
    app.increment();
    expect(app.count).toEqual(2);
  });

  it('should not increase the count more than 5.', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    [...Array(5).keys()].map(() => app.increment());
    expect(app.count).toEqual(5);
    app.increment();
    expect(app.count).toEqual(5);
  });

  it('should decrement the count.', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.decrement();
  });
});
