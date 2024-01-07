import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './users.service';

describe('AppComponent', () => {
  let userService: UserService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers:[UserService]
    });

    userService = TestBed.inject(UserService);
  });

  it('should get users list', () => {
    const mockUsers = [
      { id: 1, name: 'adi 1' },
      { id: 2, name: 'adi 2' },
    ];
    userService.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });
  });
});
