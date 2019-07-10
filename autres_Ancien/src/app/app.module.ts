import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VerifService } from "./verif.service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertSaisieComponent } from './cert-saisie/cert-saisie.component';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatInfoComponent } from './candidat-info/candidat-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './ang-material/ang-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrintDocumentComponent } from './print-document/print-document.component';

@NgModule({
  declarations: [
    
    AppComponent,
    CertSaisieComponent,
    CandidatComponent,
    CandidatInfoComponent,
    PrintDocumentComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AngMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    VerifService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
