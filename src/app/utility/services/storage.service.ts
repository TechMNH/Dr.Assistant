import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { AnyProfile } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class CookieStorageService {

    constructor(private cookieService: CookieService) {
        // this.deleteAllCookies();
    }

    // this method is used to store the data
    public storeCookies(key: string, value: AnyProfile, encryptionKey: string): void {
        const encryptedCookie = CryptoJS.AES.encrypt(JSON.stringify(value), encryptionKey).toString();
        this.cookieService.set(key, encryptedCookie);
    }

    // this method is used to retrieve the data
    public getCookies(key: string, encryptionKey: string) {
        const encryptedCookie = this.cookieService.get(key);
        return JSON.parse(
            CryptoJS.AES
                .decrypt(encryptedCookie, encryptionKey)
                .toString(CryptoJS.enc.Utf8)
        ) as AnyProfile;
    }

    // this method is used to delete the data
    public deleteCookies(key: string) {
        this.cookieService.delete(key);
    }

    private deleteAllCookies() {
        this.cookieService.deleteAll();
    }

    public check(key: string): boolean {
        var cookieExists: boolean = this.cookieService.check(key);
        return cookieExists;
    }
}