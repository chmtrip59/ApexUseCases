import { LightningElement } from 'lwc';

export default class BundleShowcase extends LightningElement {
    name = 'Dhanvika Tripathi';
    number = 3;

    renderedCallback() {
        const gjio = this.template.querySelector("#go");
         
            gjio.addEventListener('click', () => {
                alert('Hello World');
            });
            
        
    
}
}