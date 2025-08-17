import { LightningElement} from 'lwc';

export default class DataBinding extends LightningElement {
    userName= 'Billu Rani';
    subscriberScore = 10;
    currentTime = new Date().toLocaleTimeString();
    totalWatchTime = 50 *13;
    totalWatch = 25;
    memberStatus;

    updateMemberStatus(event){
        this.memberStatus = event.target.value;
    }
    _minutesWatched = this.totalWatch * 10;//Backing variable for getter and setter

    get minutesWatched(){
        // return `The total watched duration is: ${this.totalWatch * 10}`;
        return this._minutesWatched;
    }

    set minutesWatched(value){
        // this._minutesWatched =event.target.value;
        this._minutesWatched = value < 1000 ? value : 5000 ;
        
    }
   
    handleWatched(event){
        this.minutesWatched = event.target.value;
    }

}