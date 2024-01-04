import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  public trainingKnowledge: { method: string }[];

  constructor(private infoService: InfoService) {
    this.trainingKnowledge = [];
  }

  ngOnInit(): void {
    this.trainingKnowledge = this.infoService.getTrainingKnowledge();
  }
}
