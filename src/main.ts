import { registerLocaleData } from '@angular/common';
import localeEsHN from '@angular/common/locales/es-HN';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

// Registrar locale
registerLocaleData(localeEsHN);
bootstrapApplication(App, appConfig).catch((err) => console.error(err));


