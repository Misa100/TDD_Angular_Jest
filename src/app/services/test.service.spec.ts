import { TestService } from "./test.service";

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    service = new TestService();
  });

  it('should create a user', () => {
    const user = service.createUser('John Doe');
    expect(user).toEqual({ name: 'John Doe' });
  });
});
