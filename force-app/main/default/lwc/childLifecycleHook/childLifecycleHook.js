import { LightningElement } from 'lwc';

export default class ChildLifecycleHook extends LightningElement {
    constructor() {
        super();
        console.log('ChildLifecycleHook constructor called');
    }

    connectedCallback() {
        console.log('ChildLifecycleHook connectedCallback called');
    }

    renderedCallback() {
        console.log('ChildLifecycleHook renderedCallback called');
    }

    disconnectedCallback() {
        console.log('ChildLifecycleHook disconnectedCallback called');
    }

    errorCallback(error, stack) {
        console.error('ChildLifecycleHook errorCallback called', error, stack);
    }
}