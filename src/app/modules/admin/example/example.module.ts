import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgForOf, NgIf } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        // ColorDirective
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        FuseCardModule,
        DragDropModule,
        NgForOf,
        NgIf,
        NgChartsModule
    ]
})
export class ExampleModule
{
}
