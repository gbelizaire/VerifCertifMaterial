import {Component, OnInit, Input,Output, EventEmitter,ViewChild,AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';

export interface CandidatElement {
  Matricule: string,
  nom: string,
  prenom: string,
  sexe: string,
  dateNaiss: string,
  Session: String;
  Section: string,
  Annee:string,
  NotesOrdinaire: number,
  NotesExtraOrdinaire: number
}
const ELEMENT_DATA: CandidatElement[] = [];
//[ { "Matricule": "0100000456", "nom": "ALMONOR", "prenom": "Frantz", "sexe": "1", "dateNaiss": "7/3/1984", "Section": "1B", "NotesOrdinaire": 622, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "CHERY", "prenom": "Philippe", "sexe": "1", "dateNaiss": "8/22/1988", "Section": "2C", "NotesOrdinaire": 902, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "CLERVIL", "prenom": "Charldee", "sexe": "1", "dateNaiss": "9/17/1989", "Section": "1C", "NotesOrdinaire": 230, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "COFFY", "prenom": "Olguere", "sexe": "1", "dateNaiss": "1/29/1978", "Section": "2C", "NotesOrdinaire": 705, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "DORCELIAN", "prenom": "Yoline", "sexe": "2", "dateNaiss": "1/28/1999", "Section": "2D", "NotesOrdinaire": 787, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "DUMERVIL", "prenom": "NadÈge", "sexe": "2", "dateNaiss": "12/22/1993", "Section": "1C", "NotesOrdinaire": 854, "NotesExtraOrdinaire": 865 }, { "Matricule": "0100000456", "nom": "DUNY", "prenom": "Verline", "sexe": "2", "dateNaiss": "2/22/1989", "Section": "1C", "NotesOrdinaire": 601, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "EDOUARD", "prenom": "Jean Lucser", "sexe": "1", "dateNaiss": "5/7/1984", "Section": "1C", "NotesOrdinaire": 385, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "EDOUARD", "prenom": "Eliezer", "sexe": "1", "dateNaiss": "7/22/1997", "Section": "2C", "NotesOrdinaire": 814, "NotesExtraOrdinaire": 866 }, { "Matricule": "0100000456", "nom": "ELSAINT", "prenom": "Marco Echevery", "sexe": "1", "dateNaiss": "4/1/1995", "Section": "1C", "NotesOrdinaire": 789, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "ETIENNE", "prenom": "Daphnee", "sexe": "2", "dateNaiss": "7/15/1986", "Section": "1C", "NotesOrdinaire": 641, "NotesExtraOrdinaire": 784 }, { "Matricule": "0100000456", "nom": "ETIENNE", "prenom": "Ismonde", "sexe": "2", "dateNaiss": "10/10/1987", "Section": "1C", "NotesOrdinaire": 620, "NotesExtraOrdinaire": 580 }, { "Matricule": "0100000456", "nom": "EXIE", "prenom": "Nader", "sexe": "1", "dateNaiss": "1/7/1987", "Section": "1C", "NotesOrdinaire": 740, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "EZNOR", "prenom": "Ajeanette", "sexe": "2", "dateNaiss": "12/12/1988", "Section": "1C", "NotesOrdinaire": 592, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "FRADIN", "prenom": "Waguens", "sexe": "1", "dateNaiss": "2/26/1984", "Section": "1C", "NotesOrdinaire": 0, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "FREJUSTE", "prenom": "Ismael", "sexe": "1", "dateNaiss": "8/23/1986", "Section": "1C", "NotesOrdinaire": 698, "NotesExtraOrdinaire": 728 }, { "Matricule": "0100000456", "nom": "GELIN", "prenom": "Mondieula", "sexe": "1", "dateNaiss": "11/28/1975", "Section": "1C", "NotesOrdinaire": 485, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "JACQUET", "prenom": "Jacques", "sexe": "1", "dateNaiss": "9/21/1987", "Section": "2C", "NotesOrdinaire": 804, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "JEAN", "prenom": "Jimmy", "sexe": "1", "dateNaiss": "8/27/1984", "Section": "1C", "NotesOrdinaire": 255, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "JEAN-PIERRE", "prenom": "Iselanda", "sexe": "2", "dateNaiss": "6/7/1998", "Section": "2C", "NotesOrdinaire": 701, "NotesExtraOrdinaire": 779 }, { "Matricule": "0100000456", "nom": "KERCIUS", "prenom": "Nanotte", "sexe": "2", "dateNaiss": "7/7/1987", "Section": "2D", "NotesOrdinaire": 743, "NotesExtraOrdinaire": 657 }, { "Matricule": "0100000456", "nom": "LAMARRE", "prenom": "Watson", "sexe": "1", "dateNaiss": "10/5/1992", "Section": "2D", "NotesOrdinaire": 511, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "LOUIS", "prenom": "Evania", "sexe": "2", "dateNaiss": "3/5/1990", "Section": "1C", "NotesOrdinaire": 333, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "MACILUS", "prenom": "Roselène", "sexe": "2", "dateNaiss": "3/14/1998", "Section": "2C", "NotesOrdinaire": 1021, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "MAIGNAN", "prenom": "Gordon Barny", "sexe": "1", "dateNaiss": "9/14/1991", "Section": "1C", "NotesOrdinaire": 732, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "PIERRE JACQUES", "prenom": "Seraphin", "sexe": "1", "dateNaiss": "6/5/1982", "Section": "1C", "NotesOrdinaire": 706, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "PIERRE-CHARLES", "prenom": "Isline", "sexe": "2", "dateNaiss": "9/24/1991", "Section": "2C", "NotesOrdinaire": 153, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "SAINT HILAIRE", "prenom": "Jean Guimy", "sexe": "1", "dateNaiss": "1/28/1983", "Section": "1C", "NotesOrdinaire": 671, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "SEIDE", "prenom": "Lucia", "sexe": "2", "dateNaiss": "10/5/1981", "Section": "2C", "NotesOrdinaire": 778, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "SEVERE", "prenom": "Daniel", "sexe": "1", "dateNaiss": "2/16/1988", "Section": "1D", "NotesOrdinaire": 741, "NotesExtraOrdinaire": 0 }, { "Matricule": "0100000456", "nom": "SYLVAINCE", "prenom": "Dashkar", "sexe": "2", "dateNaiss": "3/4/1992", "Section": "2C", "NotesOrdinaire": 798, "NotesExtraOrdinaire": 0 } ];

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  @Input() personnes:CandidatElement[];
  @Output() candidatselectionne = new EventEmitter();
  personnes_:any[]=this.personnes; 
  firstTime :boolean = true;
   Rech:string=""; 
  
   displayedColumns: string[] = ['nom', 'prenom', 'sexe','dateNaiss'];//,'Section','NotesOrdinaire','NotesExtraOrdinaire'];
   dataSource = new MatTableDataSource<CandidatElement>();
   @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {  }
  ngAfterViewInit(){
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  affiche(r){
    // console.log("On vient de cliquer sur moi");
    // console.log(r);
    this.candidatselectionne.emit(r);
  }
  ngOnInit() {
      
    this.dataSource.data =[];
     setTimeout(()=>{
      this.afficheData();
    },900);
    this.dataSource.paginator = this.paginator;
    
  }
  afficheData(){
   // console.log(this.personnes);
    this.dataSource.data = this.personnes;
    this.dataSource.paginator = this.paginator;
  }
}
