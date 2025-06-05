import { LightningElement , api , wire } from 'lwc';
import {getRecord,getFieldValue} from 'lightning/uiRecordApi';
/*import NAME  from '@salesforce/schema/Account.Name';
import PHONE  from '@salesforce/schema/Account.Phone';
*/   
         /*
            OR
             
             */
import NAME   from '@salesforce/schema/Account';
import PHONE  from '@salesforce/schema/Account';

export default class WireDecoratorExample extends LightningElement 
{
    @api recordId;
    // @wire(getRecord,{recordId: '$recordId',fields:[NAME,PHONE]})
    @wire(getRecord,{recordId: '$recordId',fields:[Account.Name,Account.Phone]})
    recordFolder;

    get name(){
        // return this.recordFolder.data ? getFieldValue(this.recordFolder.data, NAME) : '';
        return this.recordFolder.data ? getFieldValue(this.recordFolder.data, Account.Name) : '';

    }
    get phone(){
        // return this.recordFolder.data ? getFieldValue(this.recordFolder.data, PHONE) : '';
        return this.recordFolder.data ? getFieldValue(this.recordFolder.data, Account.Phone) : '';
    }

}