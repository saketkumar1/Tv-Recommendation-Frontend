import { MatDialogModule } from '@angular/material/dialog';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CardComponent } from './component/card/card.component';
import { BannerComponent } from './component/banner/banner.component';
import { PlansComponent } from './component/plans/plans.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { DetailPageComponent } from './component/detail-page/detail-page.component';
import { SearchComponent } from './component/search/search.component';
import { SearchCardComponent } from './component/search-card/search-card.component';
import { MovieDashboardComponent } from './component/movie-dashboard/movie-dashboard.component';
import { SeriesDashboardComponent } from './component/series-dashboard/series-dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { EditDetailsComponent } from './component/edit-details/edit-details.component';

import { HistoryCardComponent } from './component/history-card/history-card.component';
import { HistoryComponent } from './component/history/history.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuestionnaireComponent } from './component/questionnaire/questionnaire.component';

import { NewPasswordComponent } from './component/new-password/new-password.component';
import { OtpComponent } from './component/otp/otp.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { SubscriptionCardComponent } from './component/subscription-card/subscription-card.component';
// import { SubscriptionCard2Component } from './component/subscription-card2/subscription-card2.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PaymentComponent } from './component/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CardComponent,
    BannerComponent,
    PlansComponent,
    LandingPageComponent,
    DetailPageComponent,
    SearchComponent,
    SearchCardComponent,
    MovieDashboardComponent,
    SeriesDashboardComponent,
    ProfileComponent,
    EditDetailsComponent,

    HistoryCardComponent,
    HistoryComponent,
    FeedbackComponent,
    QuestionnaireComponent,
    NewPasswordComponent,
    OtpComponent,
    ForgotPasswordComponent,
    SubscriptionComponent,
    SubscriptionCardComponent,
  
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    SocialLoginModule,
    MatSnackBarModule,

    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '606199275601-imv6kshton0cvnrk6mhunotlhpqaa8ev.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
