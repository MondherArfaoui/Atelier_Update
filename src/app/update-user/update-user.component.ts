import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../Core/Services/user-service.service';
import { User } from '../Core/Models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!:number;
  user!:User;

  constructor(private userS:UserServiceService, private ActR:ActivatedRoute, private R:Router) { }

  ngOnInit(): void {
    this.id = this.ActR.snapshot.params['id'];
    this.userS.getUserById(this.id).subscribe(data=>this.user=data);
  }

  updateUser(){
    this.userS.updateUser(this.user).subscribe(()=>{
      alert('User Updated!!');
      this.R.navigate(['users']);
    });
  }

}
