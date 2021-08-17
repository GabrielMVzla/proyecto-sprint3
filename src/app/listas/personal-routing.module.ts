import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {ListaComponent} from './components/lista/lista.component'

const routes: Routes = [
    {
        path: '',
        component: ListaComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        
    ],
    exports:[
        RouterModule
    ]
})

export class PersonalRoutinComponent {}