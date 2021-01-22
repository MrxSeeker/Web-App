import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegisterService } from '../user-register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: User = { _id: "", username: "", password: "", email: "" };
  constructor(private userRegisterService: UserRegisterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  Register(): void {
    this.userRegisterService.register(this.user).subscribe(user => {
      this.route.queryParams.subscribe(params => {
        this.router.navigate([params['returnUrl'] || 'photos']);
      })
    });
  }

}
