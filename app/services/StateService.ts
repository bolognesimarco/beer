import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
    public states = {
        signingIn: false,
        loggeidIn: false
    }
}