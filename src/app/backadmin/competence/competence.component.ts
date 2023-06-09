import { Component, Input, OnInit } from '@angular/core';
import { Competence } from 'src/app/_models/competence';
import { CompetenceService } from 'src/app/_services/competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  CompetenceList:Competence [] = []
  editCompetenceModal:boolean = false;

  constructor(
    private _CmtService : CompetenceService
  ) { }

  ngOnInit(): void {
    this._CmtService.getAll().subscribe((res:any)=>{
      this.CompetenceList=res.body
      console.log(this.CompetenceList)
    })
  }

  deleteCompetence(event:any){
    this._CmtService.delete(event).subscribe({
      next :() => this.CompetenceList=this.CompetenceList.filter((p) => p.id != event)
    })
  }
  

}
