import { LightningElement } from 'lwc';

export default class EventNotificationParent extends LightningElement {

    showcaseChild;

    handleChildEvent(pickedEvent){
        this.showcaseChild = pickedEvent.detail;
    }
}