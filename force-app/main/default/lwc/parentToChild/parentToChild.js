import { LightningElement } from 'lwc';

export default class ParentToChild extends LightningElement {
    
    myShow;
    
    handleProductEvent(event){

        this.myShow = event.detail;
    }
}