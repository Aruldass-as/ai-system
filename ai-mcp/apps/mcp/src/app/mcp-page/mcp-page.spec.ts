import { ComponentFixture, TestBed } from '@angular/core/testing';
import { McpPage } from './mcp-page';

describe('McpPage', () => {
  let component: McpPage;
  let fixture: ComponentFixture<McpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McpPage],
    }).compileComponents();

    fixture = TestBed.createComponent(McpPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
