import { LightningElement, wire , api} from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';




export default class UsingApexInLWC extends LightningElement {
    @api recordId;

    @wire(getContacts, { accIds: '$recordId' })
    contacts;
}