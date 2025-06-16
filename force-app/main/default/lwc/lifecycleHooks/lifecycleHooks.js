import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    userName = 'Dhanvika Tripathi';

    handleNameChange(){
        this.userName = "Chandra Mauli Tripathi";
        
    }

    constructor(){
        super();
       // console.log("Constructor is called");
    }

    connectedCallback(){
      //  console.log("Connected Callback is called");
    }
    renderedCallback(){
      //  console.log("Rendered Callback is called");
    }
    disconnectedCallback(){
     //   console.log("Disconnected Callback is called");
    }
    errorCallback(error,stack){
     //   console.log("Error Callback is called");
      //  console.log("Error: ",error);
      //  console.log("Stack: ",stack);
    }
}