import { LightningElement } from 'lwc';

export default class IteratorInLwc extends LightningElement {

    taskList = [
        {id:1,taskName:'Task 1',taskPriority:'High',taskStatus:'In Progress'},
        {id:1,taskName:'Task 2',taskPriority:'Medium',taskStatus:'Pending'},
        {id:1,taskName:'Task 3',taskPriority:'Low',taskStatus:'Completed'}
    ]
}