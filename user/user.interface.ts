import { Observable } from "rxjs";

export interface UserService {
  Register(User): Observable<User>;
}

export interface User {
  username: string;
  password: string;
}
