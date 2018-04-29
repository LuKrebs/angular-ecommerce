import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Guard
import { AuthGuard } from './guards/auth.guard';

// Flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Angular Material Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Services
import { AuthService } from './services/auth.service';

// Pages
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/ecommerce/home/home.component';

// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { ToolbarComponent } from './shared-components/toolbar/toolbar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { SidebarListComponent } from './shared-components/sidebar/sidebar-list/sidebar-list.component';
import { ToolbarSocialMediaLinksComponent } from './shared-components/toolbar/toolbar-social-media-links/toolbar-social-media-links.component';
import { BannerComponent } from './pages/ecommerce/home/banner/banner.component';

// Routes
const appRoutes: Routes = [
  { path: 'admin', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: '', component: HomeComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    ToolbarComponent,
    FooterComponent,
    SidebarListComponent,
    ToolbarSocialMediaLinksComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    // Routing
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    // Flash messages
    FlashMessagesModule.forRoot(),
    // Angular Material Components
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
