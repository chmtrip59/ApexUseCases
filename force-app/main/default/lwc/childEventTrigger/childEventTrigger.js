import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {

    selectedProduct;

    handlePublish(){
        this.selectedProduct = "Rayban Sunglasses";

        // Create a custom event with the name 'productselected'
       const myEvent = new CustomEvent('sendselectedproduct',{
            detail : this.selectedProduct
        })

        this.dispatchEvent(myEvent);
        // Dispatch the event to the parent component
        // The parent component will listen for this event and handle it accordingly
    }
}