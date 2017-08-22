import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ChannelsListComponent } from './channels-list/channels-list.component';
import { ChannelItemComponent } from './channel-item/channel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SearchBoxComponent,
    ChannelsListComponent,
    ChannelItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
