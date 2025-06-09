import { LightningElement } from 'lwc';

export default class ReactivityCheck extends LightningElement {

    userAddress = "344 old Delhi Road, New Delhi, India";

    updateAddress(){
        this.userAddress = "344 Yemen Road, Uttar Pradesh, India";
        this.myPersonalDetails[0].phoneNumber = "646517";
        this.myPersonalDetails[0].objectId = this.myPersonalDetails[0].password ;
    }

    myPersonalDetails =  [ { "message": "Hello, Roger! Your order number is: #59", "phoneNumber": "1-232-585-4379 x8133", "phoneVariation": "+90 371 117 10 44", "status": "active", "name": { "first": "Dennis", "middle": "Anderson", "last": "Bartoletti" }, "username": "Dennis-Bartoletti", "password": "NDZhD3JUDOcqDPH", "emails": [ "Melba_West@gmail.com", "Cary.Predovic68@gmail.com" ], "location": { "street": "6978 Meaghan Crossing", "city": "West Eribertomouth", "state": "Indiana", "country": "Democratic Republic of the Congo", "zip": "27610-8030", "coordinates": { "latitude": "-56.4418", "longitude": "-133.988" } }, "website": "https://ambitious-bookend.org", "domain": "piercing-fawn.name", "job": { "title": "Dynamic Research Planner", "descriptor": "Investor", "area": "Web", "type": "Consultant", "company": "Johnson, Botsford and Graham" }, "creditCard": { "number": "3528-4613-6802-0955", "cvv": "117", "issuer": "american_express" }, "uuid": "0bab35fb-ef6a-4285-9f3a-93f6b8fe1fbe", "objectId": "684702c58ef5e1dee86add76" } ] 
}