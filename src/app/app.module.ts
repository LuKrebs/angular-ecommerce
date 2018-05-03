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

// LightboxModule
import { LightboxModule } from 'angular2-lightbox';

// Directive, Pipes
import { CurrencyMaskModule } from "ng2-currency-mask";

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
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

// Services
import { AuthService } from './services/auth.service';

// Pages
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/ecommerce/home/home.component';
import { CartComponent } from './pages/ecommerce/cart/cart.component';
import { TiaraPageComponent } from './pages/ecommerce/woman/tiara-page/tiara-page.component';
import { BicoDePatoPageComponent } from './pages/ecommerce/woman/bico-de-pato-page/bico-de-pato-page.component';
import { CalcinhaPageComponent } from './pages/ecommerce/woman/calcinha-page/calcinha-page.component';
import { SapatinhoPageComponent } from './pages/ecommerce/woman/sapatinho-page/sapatinho-page.component';
import { GravataPageComponent } from './pages/ecommerce/man/gravata-page/gravata-page.component';
import { SuspensorioPageComponent } from './pages/ecommerce/man/suspensorio-page/suspensorio-page.component';
import { AboutUsComponent } from './pages/ecommerce/info/about-us/about-us.component';
import { DeliverPolicyComponent } from './pages/ecommerce/info/deliver-policy/deliver-policy.component';
import { HowItWorksComponent } from './pages/ecommerce/info/how-it-works/how-it-works.component';


// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { ToolbarComponent } from './shared-components/toolbar/toolbar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { SidebarListComponent } from './shared-components/sidebar/sidebar-list/sidebar-list.component';
import { ToolbarSocialMediaLinksComponent } from './shared-components/toolbar/toolbar-social-media-links/toolbar-social-media-links.component';
import { BannerComponent } from './pages/ecommerce/home/banner/banner.component';
import { NewComponent } from './pages/admin/products/new/new.component';
import { ShowComponent } from './pages/admin/products/show/show.component';
import { IndexComponent } from './pages/admin/products/index/index.component';
import { ProductsService } from './services/products.service';
import { EditComponent } from './pages/admin/products/edit/edit.component';
import { TiarasComponent } from './pages/ecommerce/home/tiaras/tiaras.component';
import { ProductCardComponent } from './shared-components/product-card/product-card.component';
import { TitleBlockComponent } from './shared-components/title-block/title-block.component';
import { ProductPageComponent } from './pages/ecommerce/product-page/product-page.component';
import { SubtitleBlockComponent } from './shared-components/subtitle-block/subtitle-block.component';
import { BicoDePatoComponent } from './pages/ecommerce/home/bico-de-pato/bico-de-pato.component';
import { CalcinhaComponent } from './pages/ecommerce/home/calcinha/calcinha.component';
import { SapatinhoComponent } from './pages/ecommerce/home/sapatinho/sapatinho.component';
import { GravataComponent } from './pages/ecommerce/home/gravata/gravata.component';
import { SuspensorioComponent } from './pages/ecommerce/home/suspensorio/suspensorio.component';

// Routes
const appRoutes: Routes = [
  // Secure Routes
  { path: 'admin', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'admin/products', component: IndexComponent, canActivate:[AuthGuard] },
  { path: 'admin/products/new', component: NewComponent, canActivate:[AuthGuard] },
  { path: 'admin/products/edit/:productId', component: EditComponent, canActivate:[AuthGuard] },
  { path: 'admin/product/:productId', component: ShowComponent, canActivate:[AuthGuard] },
  
  // Open routes
  { path: 'products/:productId', component: ProductPageComponent },
    // Woman
  { path: 'bico-de-pato', component: BicoDePatoPageComponent },
  { path: 'calcinhas', component: CalcinhaPageComponent },
  { path: 'sapatinhos', component: SapatinhoPageComponent },
  { path: 'tiaras', component: TiaraPageComponent },
    // Man
  { path: 'gravatas', component: GravataPageComponent },
  { path: 'suspensorios', component: SuspensorioPageComponent },
    // Info
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'deliver-policy', component: DeliverPolicyComponent },
  { path: 'about-us', component: AboutUsComponent },
  
  { path: 'cart', component: CartComponent },

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
    NewComponent,
    ShowComponent,
    IndexComponent,
    EditComponent,
    TiarasComponent,
    ProductCardComponent,
    TitleBlockComponent,
    ProductPageComponent,
    SubtitleBlockComponent,
    BicoDePatoComponent,
    CalcinhaComponent,
    SapatinhoComponent,
    GravataComponent,
    SuspensorioComponent,
    CartComponent,
    TiaraPageComponent,
    BicoDePatoPageComponent,
    CalcinhaPageComponent,
    SapatinhoPageComponent,
    GravataPageComponent,
    SuspensorioPageComponent,
    AboutUsComponent,
    DeliverPolicyComponent,
    HowItWorksComponent,
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
    // CurrencyMask
    CurrencyMaskModule,
    // Angular Material Components
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    // Zoom images
    LightboxModule,
  ],
  providers: [AuthService, AuthGuard, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
