import { LightningElement,api } from 'lwc';

export default class ContainerComponent extends LightningElement {

    @api productList;

    @api productsFound = false;
}