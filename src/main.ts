import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export function main() {
    platformBrowserDynamic().bootstrapModule(AppModule);
}

const ENV: any = process.env.ENV;

if (ENV && ENV.mode !== 'development') {
    enableProdMode();
}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}
