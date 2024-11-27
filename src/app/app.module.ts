import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import du FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
=======
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
>>>>>>> 984257455bfe63db809064bdcbfb1d698df9331c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent 
=======
    ResidencesComponentComponent // Ajout du composant Résidences
>>>>>>> 984257455bfe63db809064bdcbfb1d698df9331c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule 
=======
    FormsModule // Ajout de FormsModule pour utiliser [(ngModel)]
>>>>>>> 984257455bfe63db809064bdcbfb1d698df9331c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
