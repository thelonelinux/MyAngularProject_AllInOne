import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators,NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ModelFormsApp';

  signupForm:FormGroup;
  FirstName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";

  constructor(private frmbuilder:FormBuilder){
    this.signupForm=frmbuilder.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      Emailid:['',[Validators.required, Validators.email]],
      userpassword:['',Validators.required]
    });
  }

  ngOnInit(){}

  PostData(){
    this.FirstName=this.signupForm.controls.fname.value;
    console.log(this.FirstName);
    console.log(this.signupForm.controls);
  
  }

  resetForm(){
    this.signupForm.reset();
  }
}
