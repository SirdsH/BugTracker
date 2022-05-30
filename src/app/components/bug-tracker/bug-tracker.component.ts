import {Component, OnInit} from '@angular/core';
import {BugModel} from "./models/bug.model";
import {BugService} from "./services/bug.service";

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss']
})
export class BugTrackerComponent implements OnInit {

  getBugs: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  bug = new BugModel();
  bugService = new BugService()


  createBug() {
    const data: BugModel = {
      description: this.bug.description,
      selectedSeverity: this.bug.selectedSeverity,
      fixed: this.bug.fixed
    }
    this.bugService.createBug(data)
  }

  fixed(bug: BugModel) {
    if (!bug.fixed) {
      return this.bugService.fixMeth(bug, true)
    } else return this.bugService.fixMeth(bug, false)
  }

  getBug() {
    return this.bugService.getBug(false)
  }

  isFixed() {
    return this.bugService.getBug(true)
  }

}
