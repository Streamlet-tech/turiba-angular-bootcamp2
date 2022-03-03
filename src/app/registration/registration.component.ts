import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name;
email;
phone;
guests;
arrivaldate;
departuredate;
test;
regexAll=()=>{
  console.log(this.name);
  let paternsName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  let nameTest = paternsName.test(this.name);
  console.log (nameTest); 


  console.log(this.phone);
  let paternsPhone = /2[0-9]{7}/;
  let phoneTest = paternsPhone.test(this.phone);
  console.log (phoneTest); 


  console.log(this.email);
  let paternsEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let emailTest = paternsEmail.test(this.email);
  console.log (emailTest); 


  console.log(this.arrivaldate);
  let paternsDate1 = /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/;
  let dateTest1 = paternsDate1.test(this.arrivaldate);
  console.log (dateTest1); 

  console.log(this.departuredate);
  let paternsDate2 = /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/;
  let dateTest2 = paternsDate2.test(this.departuredate);
  console.log (dateTest2); 

  

  if (nameTest === true && phoneTest === true && emailTest === true && dateTest1 === true && dateTest2 === true) {
    // alert ("Registration Complete");
    this.test= true;
    console.log(this.test);
  }
}
}
