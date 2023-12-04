import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SupportComponent } from './support/support.component';
import { AccountComponent } from './account/account.component';
import { QuickLinkComponent } from './quick-link/quick-link.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { LogoComponent } from './logo/logo.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    SupportComponent,
    AccountComponent,
    QuickLinkComponent,
    DownloadAppComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
