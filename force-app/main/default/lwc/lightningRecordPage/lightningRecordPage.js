import LeadSource from '@salesforce/schema/Contact.LeadSource';
import { LightningElement,api } from 'lwc';

export default class LightningRecordPage extends LightningElement {
    // recordId = "500NS00000yUwfKYAS";
    // for record page if i put this on case record page it will same record for every other case id , to tackle this we can use recordId with api decorator

    @api recordId;
    objectApiName = 'Account';
    fields = ['AccountNumber','Name','AccountSource' , 'AnnualRevenue' , 'Industry' ,'Rating','Description'];
    
}