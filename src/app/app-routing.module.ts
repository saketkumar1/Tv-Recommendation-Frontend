import { FeedbackComponent } from './component/feedback/feedback.component';
import { SeriesDashboardComponent } from './component/series-dashboard/series-dashboard.component';
import { MovieDashboardComponent } from './component/movie-dashboard/movie-dashboard.component';
import { PlansComponent } from './component/plans/plans.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { DetailPageComponent } from './component/detail-page/detail-page.component';
import { SearchComponent } from './component/search/search.component';
import { ProfileComponent } from './component/profile/profile.component';
import { EditDetailsComponent } from './component/edit-details/edit-details.component';
import { HistoryComponent } from './component/history/history.component';

import { QuestionnaireComponent } from './component/questionnaire/questionnaire.component';

import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './component/new-password/new-password.component';
import { OtpComponent } from './component/otp/otp.component';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { PaymentComponent } from './component/payment/payment.component';


const routes: Routes = [
  {
    component: LandingPageComponent,
    path:''
  },
  {
    component: DashboardComponent,
    path:'browse'
  },
  {
    component: LoginComponent,
    path:'login'
  },
  {
    component: RegisterComponent,
    path:'register'
  },
  {
    component: PlansComponent,
    path:'plans'
  },
  {
    component: DetailPageComponent,
    path:'detail/:id/:type'
  },
  {
    component: SearchComponent,
    path:'search/:name'
  },
  {
    component: MovieDashboardComponent,
    path:'movies'
  },
  {
    component: SeriesDashboardComponent,
    path:'series'
  },
  {
    component: ProfileComponent,
    path:'profile'
  },
  {
    component: EditDetailsComponent,
    path:'edit-details'
  },
  {
    component: HistoryComponent,
    path:'history'
  },
  {
    component: FeedbackComponent,
    path:'feedback'
  },
  {
    component: QuestionnaireComponent,
    path:'questionnaire'
  },
  {
    component: ForgotPasswordComponent,
    path:'forgot-password'
  },
  {
    component: NewPasswordComponent,
    path:'new-password'
  },
  {
    component: OtpComponent,
    path:'enter-otp'
  },
  {
    component: SubscriptionComponent,
    path:'mysubscriptions'
  },
  {
    component: PaymentComponent,
    path:'payment/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
