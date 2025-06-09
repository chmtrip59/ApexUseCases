import { LightningElement,api } from 'lwc';

export default class ContainerComponent extends LightningElement {

    @api productList;

    @api productsFound = false;

    parentCalled =false;

    get hasProductFound(){
       return this.productFound == "true" ?  true : false ;
    }

    // Call child from parent vidoe 52

    @api handleParentCall(){
        this.parentCalled = true ;
    }
}