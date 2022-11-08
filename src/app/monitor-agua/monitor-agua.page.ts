import { UserService } from './../api/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monitor-agua',
  templateUrl: './monitor-agua.page.html',
  styleUrls: ['./monitor-agua.page.scss'],
})
export class MonitorAguaPage implements OnInit {

  public folder: string;
  public objective: number;
  public consumption: number;

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.objective = this.userService.getObjective();
    this.consumption = this.userService.getConsumption();
  }
}
