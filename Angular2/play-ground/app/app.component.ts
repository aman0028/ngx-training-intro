/* Copyright (C) 2016 Pracxs Net & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: prometheus@pracxs.com
 * or to prometheus@itce.com
 */

import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    template: `
        <contacts-list #list></contacts-list>

        <contact-details [contact]="list.selected"></contact-details>
    `
})
export class AppComponent {
    selected: Contact
}