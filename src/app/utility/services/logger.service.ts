import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {

  constructor(private __logger__: NGXLogger) { }

  log(logData: string, logLevel: string = environment.defaultLogLevel) {
    logLevel = logLevel.toLowerCase();
    switch (logLevel) {
      default:
        this.__logger__.log(logData, new Date());
        break;
      case 'error':
        this.__logger__.error(logData, new Date());
        break;
      case 'debug':
        this.__logger__.debug(logData, new Date());
        break;
      case 'trace':
        this.__logger__.trace(logData, new Date());
        break;
      case 'info':
        this.__logger__.info(logData, new Date());
        break;
      case 'fatal':
        this.__logger__.fatal(logData, new Date());
        break;
      case 'log':
        this.__logger__.log(logData, new Date());
      case 'warn':
        this.__logger__.warn(logData, new Date());
        break;
    }
  }
}