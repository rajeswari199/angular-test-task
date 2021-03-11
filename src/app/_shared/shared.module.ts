import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const MODULES: any[] = [
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
];

export const SHARED_MODULES_WITH_PROVIDERS: any[] = [];

const PIPES: any[] = [];

const COMPONENTS: any[] = [];

const DIRECTIVES: any[] = [];

const PROVIDERS: any[] = [];

@NgModule({
    imports: [
        ...MODULES,
        ...SHARED_MODULES_WITH_PROVIDERS,
    ],
    declarations: [
        ...PIPES,
        ...COMPONENTS,
        ...DIRECTIVES,
    ],
    providers: [
        ...PROVIDERS,
    ],
    exports: [
        ...MODULES,
        ...PIPES,
        ...COMPONENTS,
        ...DIRECTIVES,
    ]
})

export class SharedModule {
}
