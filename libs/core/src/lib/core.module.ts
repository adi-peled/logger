import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CORE_TOKEN,
} from './core.module.config';
import { CoreConfig } from './interfaces/core.interface';

@NgModule({
  imports: [CommonModule],
  providers: [
   
  ],
})
export class CoreModule {
  static forRoot(
    config: CoreConfig,
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: CORE_TOKEN, useValue: config },
      ],
    };
  }
}
