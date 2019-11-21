import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(
    ) {
    }

    isAuthenticated() {
        return localStorage.getItem("token") != null;
    }

    clearAuthToken() {
        localStorage.clear();
    }

    setAuthToken(token: string) {
        return localStorage.setItem('token', token);
    }

}

