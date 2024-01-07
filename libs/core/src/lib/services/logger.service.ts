import { Inject, Injectable, isDevMode } from '@angular/core';
import { StorageService } from './storage.service';
import { Subject, bufferTime, debounceTime, pipe } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreConfig } from '../interfaces/core.interface';
import { CORE_TOKEN } from '../core.module.config';
import { Store } from '../enums/store.enum';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  message$ = new Subject<Message>();

  constructor(
    private storageService: StorageService,
    @Inject(CORE_TOKEN) private coreConfig: CoreConfig
  ) {
    this.message$
      .pipe(bufferTime(coreConfig.logger.bufferTime))
      .subscribe((messages: Message[]) => {
        messages.forEach((m) => {
          this.handleLog(m);
        });
      });
  }

  private handleLog(message: Message) {
    if (isDevMode()) return;
    switch (this.coreConfig.logger.store) {
      case Store.LocalStorage: {
        const messages: Message[] =
          this.storageService.getFromLocalStorage('messages') || [];
        messages.unshift(message);
        this.storageService.saveToLocalStorage('messages', messages);
        break;
      }
      case Store.Console:
      default:
        console.log(`error: ${message.text} at ${new Date().valueOf()}`);
        break;
    }
  }

  public handleError(error: HttpErrorResponse) {
    const message: Message = {
      timestamp: new Date().valueOf(),
      text: error.message,
    };
    this.message$.next(message);
  }
}

export interface Message {
  text: string;
  timestamp: number;
}
