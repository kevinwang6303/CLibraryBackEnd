import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';

// import { SharedModule } from '@hamastar/shared';
// import { BlockViewModule } from '@hamastar/shared/components/block-view';
// import { PopUpModule } from '@hamastar/shared/components/pop-up2';
// import { RouteLoadingModule } from '@hamastar/shared/components/route-loading';
// import { NgxPaginationModule } from 'ngx-pagination/dist/ngx-pagination';
// import { NgxfUploaderModule } from 'ngxf-uploader';

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
