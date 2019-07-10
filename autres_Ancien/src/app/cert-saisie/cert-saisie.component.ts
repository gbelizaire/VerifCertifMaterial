import { Component, OnInit } from '@angular/core';
import { VerifService } from './../verif.service';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
@Component({
  selector: 'cert-saisie',
  templateUrl: './cert-saisie.component.html',
  styleUrls: ['./cert-saisie.component.css']
})
export class CertSaisieComponent implements OnInit {
  contientErreur:Boolean = false;
 
  messageErreur:String ="Matricule doit etre 10 digits entiers";
  infoTrouvee:Boolean = false;

  personnes:any =[];
  candidatchoisi:CandidatElement;
  
  constructor(private VerifService_:VerifService) { }

  ngOnInit() {
  }
  AfficheCandidatSelectionne(r){
    //console.log(r);
    this.candidatchoisi = r;
    console.log("+++++++++++++++++++++++++++++++++++++++");
    console.log(this.candidatchoisi);
    console.log("+++++++++++++++++++++++++++++++++++++++");
  }
    
  Imprimer(){
     // parentdiv is the html element which has to be converted to PDF
     html2canvas(document.querySelector("#info2")).then(canvas => {

      var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      var imgData  = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData,0,0,canvas.width, canvas.height);

       pdf.autoPrint();  // <<--------------------- !!
       pdf.output('dataurlnewwindow');
      // pdf.save('table.pdf');
      //pdf.save('converteddoc.pdf');
     });
    /*
    var data = document.getElementById('info');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
*/
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
