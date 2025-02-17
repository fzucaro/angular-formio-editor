import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormioEditorComponent } from './formio-editor.component';
import { FormioModule } from '@formio/angular';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { JsonChangePanelComponent } from './json-change-panel/json-change-panel.component';


@NgModule({
  declarations: [FormioEditorComponent, JsonEditorComponent, JsonChangePanelComponent],
  imports: [
    BrowserModule,
    FormioModule,
    FormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [FormioEditorComponent]
})
export class FormioEditorModule { }
