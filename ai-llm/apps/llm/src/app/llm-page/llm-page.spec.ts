import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlmPage } from './llm-page';

describe('LlmPage', () => {
  let component: LlmPage;
  let fixture: ComponentFixture<LlmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LlmPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
