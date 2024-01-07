import { Store } from "../enums/store.enum";

export interface CoreConfig {
    logger: {
      format: string;
      store: Store;
      bufferTime: number;
    };
  }
  