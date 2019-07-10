import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material';



const angMat=[
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  
  ];

@NgModule({
 
  imports: [angMat],
  exports:[angMat]
})
export class AngMaterialModule { }
