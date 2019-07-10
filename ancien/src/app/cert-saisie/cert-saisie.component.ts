import { Component, OnInit } from '@angular/core';
import { VerifService } from './../verif.service';

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
  
  constructor(private VerifService_:VerifService) { }

  ngOnInit() {
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
            
          },(err)=>{
            console.log(err);
          });
         }

      
  } 

}
