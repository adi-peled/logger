import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule ,LoggerService,Store} from '@interview/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot(
      {
        logger: {
          bufferTime: 5000,
          format: 'string',
          store: Store.LocalStorage,
        },
      },
    ),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: LoggerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
