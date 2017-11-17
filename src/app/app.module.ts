import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SharedModule } from '@hamastar/shared';
// import { BlockViewModule } from '@hamastar/shared/components/block-view';
// import { PopUpModule } from '@hamastar/shared/components/pop-up2';
// import { RouteLoadingModule } from '@hamastar/shared/components/route-loading';
// import { NgxPaginationModule } from 'ngx-pagination/dist/ngx-pagination';
// import { NgxfUploaderModule } from 'ngxf-uploader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // RouteLoadingModule,
    // NgxPaginationModule,
    // PopUpModule.forRoot(),
    // BlockViewModule.forRoot(),
    // NgxfUploaderModule.forRoot(),
    // SharedModule.forRoot(),
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
