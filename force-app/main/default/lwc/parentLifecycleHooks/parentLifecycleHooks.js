import { LightningElement } from 'lwc';

export default class ParentLifecycleHooks extends LightningElement {

    constructor() {
        super();
        console.log('ParentLifecycleHooks constructor called');
    }
    connectedCallback() {
        console.log('ParentLifecycleHooks connectedCallback called');
    }

    renderedCallback() {
        console.log('ParentLifecycleHooks renderedCallback called');
    }

    disconnectedCallback() {
        console.log('ParentLifecycleHooks disconnectedCallback called');
    }
    errorCallback(error, stack) {
        console.error('ParentLifecycleHooks errorCallback called', error, stack);
    }
}