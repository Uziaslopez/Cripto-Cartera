import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatInputModule
  ],
})
export class MaterialModule {}
