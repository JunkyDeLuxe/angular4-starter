import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
    constructor() {}

    get(key: string) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    set(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    del(key) {
        window.localStorage.removeItem(key);
    }
}
