import { LightningElement } from 'lwc';

export default class EventNotificationChild extends LightningElement {

    myPersonalProperty;

    handleThisClick(){
        this.myPersonalProperty = 'I am a property in the child component';

        let pickedEvent = new CustomEvent('myevent',{
            detail: this.myPersonalProperty
        })
        this.dispatchEvent(pickedEvent);
    }
}