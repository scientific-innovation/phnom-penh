import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {CustomerComponent} from "../pages/customer/customer.component";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CustomerComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        CustomerComponent
    ],
    providers: []
})
export class AppModule {
}
