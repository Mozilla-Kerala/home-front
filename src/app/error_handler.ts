import { ErrorHandler } from '@angular/core';
// @ts-ignore
import AirbrakeClient from 'airbrake-js';

export class AirbrakeErrorHandler implements ErrorHandler {
airbrake: AirbrakeClient;

  constructor() {
    this.airbrake = new AirbrakeClient({
      projectId: 209055,
      projectKey: 'd62f7e7b9ac4f572d5c26cbef72dbc4a'
  });
  }

  handleError(error: any): void {
    this.airbrake.notify(error);
  }
}
