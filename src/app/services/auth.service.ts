import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable()

export class AuthService {
  private usersUrl = 'assets/data/users.json';

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map((users: User[]) => {
        const user = users.find(u => u.email === email && u.password === password);
        return !!user;  // Return true if the user is found, otherwise false
      })
    );
  }
}
