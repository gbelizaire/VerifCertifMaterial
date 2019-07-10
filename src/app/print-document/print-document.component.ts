import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-print-document',
  templateUrl: './print-document.component.html',
  styleUrls: ['./print-document.component.css']
})
export class PrintDocumentComponent implements OnInit {
 lesDocs:any[]=[
  {
  Matricule: "0100007313",
  nom: "ANGER",
  prenom: "Metuschelah",
  sexe: "2",
  dateNaiss: "1/12/1985",
  Session: "A",
  Section: "1C",
  Annee: "2008",
  NotesOrdinaire: 478,
  NotesExtraOrdinaire: 0
  },
  {
  Matricule: "0100007313",
  nom: "AUGUSTE",
  prenom: "Roodly",
  sexe: "1",
  dateNaiss: "8/11/1996",
  Session: "O",
  Section: "2C",
  Annee: "2016",
  NotesOrdinaire: 954,
  NotesExtraOrdinaire: 0
  },
  {
  Matricule: "0100007313",
  nom: "BADETTE",
  prenom: "Joanes",
  sexe: "1",
  dateNaiss: "4/11/1985",
  Session: "E",
  Section: "1C",
  Annee: "2010",
  NotesOrdinaire: 577,
  NotesExtraOrdinaire: 646
  },
  {
  Matricule: "0100007313",
  nom: "BERNARD",
  prenom: "Junia",
  sexe: "1",
  dateNaiss: "6/4/1982",
  Session: "A",
  Section: "1C",
  Annee: "2011",
  NotesOrdinaire: 623,
  NotesExtraOrdinaire: 0
  },
  {
  Matricule: "0100007313",
  nom: "BLAIN",
  prenom: "Wideline",
  sexe: "2",
  dateNaiss: "12/9/1990",
  Session: "E",
  Section: "1C",
  Annee: "2014",
  NotesOrdinaire: 849,
  NotesExtraOrdinaire: 1005
  },
  {
  Matricule: "0100007313",
  nom: "CEANT",
  prenom: "Evens",
  sexe: "1",
  dateNaiss: "7/26/1991",
  Session: "O",
  Section: "1C",
  Annee: "2013",
  NotesOrdinaire: 927,
  NotesExtraOrdinaire: 0
  },
  {
  Matricule: "0100007313",
  nom: "CHARLES",
  prenom: "Wideline",
  sexe: "2",
  dateNaiss: "4/25/1987",
  Session: "B",
  Section: "1C",
  Annee: "2009",
  NotesOrdinaire: 759,
  NotesExtraOrdinaire: 0
  },
  {
  Matricule: "0100007313",
  nom: "CHERY",
  prenom: "Ricardo",
  sexe: "1",
  dateNaiss: "9/11/1990",
  Session: "A",
  Section: "1C",
  Annee: "2012",
  NotesOrdinaire: 773,
  NotesExtraOrdinaire: 0
  }
  ];
  constructor() { }

  ngOnInit() {
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
}
