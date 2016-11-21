import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    TestRoutingModule
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule { }
