import {BugModel} from "../models/bug.model";

export class BugService {
  bugs: BugModel[] = []

  createBug(bug: BugModel) {
    this.bugs.push(bug)
  }

  getBug(isFixed: boolean) {
    return this.bugs.filter(i => i.fixed === isFixed)
  }

  fixMeth(bug: BugModel, bugValue: boolean) {
    bug.fixed = bugValue
  }
}
