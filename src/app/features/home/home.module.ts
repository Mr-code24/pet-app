import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MenuComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule { }
