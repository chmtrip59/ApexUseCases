import { LightningElement } from 'lwc';

export default class EventNotificationChild extends LightningElement {

    myPersonalProperty = {};

    handleThisClick(){
        this.myPersonalProperty = { id: 1 , name: 'Champak Chacha'}

        let pickedEvent = new CustomEvent('myevent',{
            detail: this.myPersonalProperty
        })
        this.dispatchEvent(pickedEvent);
    }
}