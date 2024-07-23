import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { GlobalErrorHandler } from './globar-error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch()
    )]
};
