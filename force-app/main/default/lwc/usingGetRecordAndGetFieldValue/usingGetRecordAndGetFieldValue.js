import { LightningElement,api,wire } from 'lwc';
import { getRecord,getFieldValue} from 'lightning/uiRecordApi';

export default class UsingGetRecordAndGetFieldValue extends LightningElement {
    @api recordId;
    fields = [ 'CaseNumber' , 'Origin' , 'Type' , 'Reason' , 'Status' ];

    @wire(getRecord, {recordId: '$recordId', fields: '$fields'})
    caseVar;
    get CaseNumber() {
        return this.caseVar.data ? getFieldValue(this.caseVar.data, 'CaseNumber') : '';
    }
    get Origin() {
        return  this.caseVar.data ? getFieldValue(this.caseVar.data, 'Origin'): '';
    }
    get Type() {
        return this.caseVar.data ? getFieldValue(this.caseVar.data, 'Type'): '';
    }
    get Reason() {
        return this.caseVar.data ? getFieldValue(this.caseVar.data, 'Reason'): '';
    }
    get Status() {
        return this.caseVar.data ? getFieldValue(this.caseVar.data, 'Status'): '';
    }
    // Note: getFieldValue will return undefined if the field is not present in the record
    // or if the record is not loaded yet.
    // Ensure that the record is loaded before accessing the fields.
    // You can use a conditional check to handle this case.

}