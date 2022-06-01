import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainModule } from './main/main.module';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'index', component: MainComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MainModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, HelloComponent, SidebarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
