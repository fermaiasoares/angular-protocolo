import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main-routing.module";

import { DashboardPage } from './pages/dashboard.page';

@NgModule({
    declarations: [
        DashboardPage
    ],
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    exports: [],
    providers: []
})
export class MainModule {}
