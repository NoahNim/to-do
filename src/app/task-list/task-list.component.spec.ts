import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  var filterByCompleteness: string = "incompleteTasks";

  // onChange(optionFromMenu) {
  //   this.filterByCompleteness = optionFromMenu;
  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 //  toggleDone(clickedTask: Task, setCompleteness: boolean) {
 //   clickedTask.done = setCompleteness;
 // }
});
