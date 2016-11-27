import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestmoduleComponent } from './testmodule.component';
import { AComponent } from './a/a.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'test',
      component: TestmoduleComponent
    },
    {
      path: 'test',
      component: TestmoduleComponent,
      children: [{
        path: 'a',
        component: AComponent
      }]
    }])
  ],
  declarations: [TestmoduleComponent, AComponent]
})
export class TestmoduleModule { }
