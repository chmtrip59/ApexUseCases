import { LightningElement,api } from 'lwc';

export default class PublicPrivateDecoratorDemo extends LightningElement {
    message = 'Private Property';
    @api recordId;
}