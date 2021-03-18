import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

const routes = [
    {
        path     : 'roupas',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        MatFormFieldModule,
        MatIconModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
