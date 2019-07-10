import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule, MatSortModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';



const angMat=[
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,

  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule
  
  ];

@NgModule({
 
  imports: [angMat],
  exports:[angMat]
})
export class AngMaterialModule { }
