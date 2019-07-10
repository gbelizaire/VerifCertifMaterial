import { Component, OnInit } from '@angular/core';
import { VerifService } from './../verif.service';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

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
  NotesExtraOrdinaire: number,
  TotCoef:number,
  TotNotes:number,
  Mention:string
}
@Component({
  selector: 'cert-saisie',
  templateUrl: './cert-saisie.component.html',
  styleUrls: ['./cert-saisie.component.css']
})
export class CertSaisieComponent implements OnInit {
  contientErreur:Boolean = false;
  dd:string="";
 
  messageErreur:String ="Matricule doit etre 10 digits entiers";
  infoTrouvee:Boolean = false;

  personnes:any =[];
  candidatchoisi:CandidatElement;
  
  constructor(private VerifService_:VerifService, private route:Router) { }

  ngOnInit() {
  }

  deconnecter(){
     this.route.navigate(['/']);
  }
  AfficheCandidatSelectionne(r){
    this.dd = new Date().toLocaleString('FR');
      //console.log(r);
   r['TotNotes']= r.NotesExtraOrdinaire>0? r.NotesExtraOrdinaire:r.NotesOrdinaire;
    this.VerifService_.get_TotCoef(r.Annee,r.Section,r.Session).subscribe((response)=>{
      this.candidatchoisi = r;    
      var p1 = JSON.parse(JSON.stringify(response))
      r['TotCoef']=p1.data.TotCoef;
      r['TotNotes']= r.NotesExtraOrdinaire>0? r.NotesExtraOrdinaire:r.NotesOrdinaire;
      r['Mention'] = parseInt(r['TotNotes']) >= (parseInt(p1.data.TotCoef)/2) ? " ADMIS ":" ECHEC ";
      this.candidatchoisi = r;
    //  console.log(r);
      // this.personnes= p1.data;
      // this.infoTrouvee = true;
    
  },(err)=>{
    console.log(err);
  });
   // get_TotCoef
    
  }
    
  Imprimer(){
     // parentdiv is the html element which has to be converted to PDF
     html2canvas(document.querySelector("#info")).then(canvas => {

      var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      var imgData  = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData,0,0,canvas.width, canvas.height);

       pdf.autoPrint();  // <<--------------------- !!
       pdf.output('dataurlnewwindow');
      // pdf.save('table.pdf');
      //pdf.save('converteddoc.pdf');
     });
    
  }

  doSomething(e){
    this.personnes=[];
    if(e.value.length < 3){
      this.contientErreur = true;
      this.infoTrouvee = false;
      this.messageErreur ="Matricule doit contenir plus de 3 digits entiers";
    } else if(isNaN(parseInt(e.value))){
           this.messageErreur ="Il faut saisir des chiffres";
           this.contientErreur = true;
           this.infoTrouvee = false;
         }else{
          this.contientErreur = false;
          this.infoTrouvee = true;
          this.VerifService_.get_dossier(e.value).subscribe((response)=>{
          
              var p1 = JSON.parse(JSON.stringify(response))
              this.personnes= p1.data;
              this.infoTrouvee = true;
            
          },(err)=>{
            console.log(err);
          });
         }

      
  } 

}
