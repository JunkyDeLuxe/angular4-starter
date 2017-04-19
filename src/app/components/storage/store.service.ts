import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
    constructor() {}

    get(key: string) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    /** by default, we stringify the content **/
    set(key, data, stringify?: Boolean) {
        window.localStorage.setItem(key, !stringify ? JSON.stringify(data) : data);
    }

    del(key) {
        window.localStorage.removeItem(key);
    }
}
