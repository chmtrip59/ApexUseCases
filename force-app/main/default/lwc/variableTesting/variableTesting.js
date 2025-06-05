import { LightningElement ,api, track} from 'lwc';

export default class VariableTesting extends LightningElement {
    //Private Variabales= Its scope is only limited to the component folder 

    name = "Dhanvika Tripathi";
    @api age = 3;
    @api favTeam = "India";

    //Public Variables= Its scope is available  to the  all the component and can be fetch the recordId from salesforce app
    // for this we use @api decorator
    @api recordId;// fetch recordId from salesforce app
    @track age = 24 ;// // track decorator is used to make the variable reactive
    // if we change the value of the variable then it will automatically re-render the component
    // @track decorator is used to make the variable reactive
    // if we change the value of the variable then it will automatically re-render the component
    // @track decorator is used to make the variable reactive
    @track address = {
        city: "Delhi",
        state: "Delhi",
        country: "India"
    };
    @api tryingTHIS = 'Tried this';
}