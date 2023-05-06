import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { POST_ENTITY_NAME, entityConfig } from './store/entity.metadata';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { HttpClientModule } from '@angular/common/http';
import { PostDataService } from './shared/service/post/post-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      logOnly: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    postDataService: PostDataService,
  ) {
    entityDataService.registerService(POST_ENTITY_NAME, postDataService)
   }
}
