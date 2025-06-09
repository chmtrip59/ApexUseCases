import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {

    productList=[
        {},
        {
            id: 1,
            name: 'Product 1',
            price: 100
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300
        }
    ]

    callChildMethod(){
        // console.log('Parent method called to call child method from here!');
        this.template.querySelector('c-container-component').handleParentCall();
    }
}