import { Routes } from '@angular/router';
import { AuthGuard } from './common-services/guards/auth.guard';
import { LoginPageComponent } from './views/login-container/login-page.component';
import { DashboardPageComponent } from './views/user-container/dashboard-page/dashboard-page.component';
import { CreatePipelineComponent } from './views/user-container/pipeline/create-pipeline/create-pipeline.component';
import { UserPageComponent } from './views/user-container/user-page.component';

export const routes: Routes = [
  {
    path: '',
    component: UserPageComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'pipeline-config/:id', component: CreatePipelineComponent },
      { path: 'pipeline-config/:id/edit', component: CreatePipelineComponent },
      { path: 'patient-details', component: CreatePipelineComponent}
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
