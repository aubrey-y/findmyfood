import { Injectable } from '@angular/core';

@Injectable()
class LoggerService {
  info(msg: any) {
    console.log(msg);
  }

  warn(msg: any) {
    console.warn(msg);
  }

  error(msg: any) {
    console.error(msg);
  }
}

export { LoggerService }
