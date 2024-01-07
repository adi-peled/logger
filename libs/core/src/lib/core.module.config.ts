import { InjectionToken } from '@angular/core';
import { CoreConfig } from './interfaces/core.interface';

export const CORE_TOKEN = new InjectionToken<CoreConfig>('CORE_TOKEN');

