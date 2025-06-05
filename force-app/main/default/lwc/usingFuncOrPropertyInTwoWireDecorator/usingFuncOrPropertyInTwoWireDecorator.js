import { LightningElement,api,wire } from 'lwc';

import getContacts from '@salesforce/apex/ContactController.getContacts';

import  getRecord  from 'lightning/uiRecordApi';

export default class UsingFuncOrPropertyInTwoWireDecorator extends LightningElement {
     
    @api recordId;

    @wire(getRecord,{recordId :'$recordId',fields : 'Account.Name'})
    myRecords;

    @wire(getContacts,{accIds : '$recordId'})
    ContactRecords;

  

    get ContactName(){
        return this.myRecords.data.fields.Name.value;
    }

}