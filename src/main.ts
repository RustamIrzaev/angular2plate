/// <reference path="../node_modules/@angular/platform-browser-dynamic/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import './assets/css/main.scss';

platformBrowserDynamic().bootstrapModule(AppModule);