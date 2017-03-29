/* Copyright (C) 2016 Pracxs Net & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: prometheus@pracxs.com
 * or to prometheus@itce.com
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Contact } from './contact'
import { ContactsService } from './contact.service'

@Component({
    selector: 'contacts-list',
    template: `
        <ul> 
            <li [class.active]="contact==selected" class='item' *ngFor="let contact of contacts">
                <a href='#' (click)="select(contact)">{{contact.firstName}} {{contact.lastName | myUpper}}</a>
                <a href='#' (click)='remove(contact)' class='remove' title='Remove'><span class='glyphicon glyphicon-remove-sign'></span></a>
            </li>
		</ul>
    `
})
export class ContactsListComponent implements OnInit {
    contacts: Contact[]
    selected: Contact

    @Output()
    contactChanged = new EventEmitter<Contact>()

    constructor(private contactsService: ContactsService) {}

    ngOnInit() {
        this.contacts = this.contactsService.getAll()
    }

    select(c: Contact) {
        this.selected = c
        this.contactChanged.emit(c)
    }

    remove(contact: Contact) {
        if(this.selected == contact) { 
            this.selected = null
            this.contactChanged.emit(null)
        }
            
        this.contactsService.remove(contact.id)
    }
}