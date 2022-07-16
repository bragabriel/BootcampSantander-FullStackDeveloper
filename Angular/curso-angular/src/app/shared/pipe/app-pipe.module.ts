import { NgModule } from "@angular/core";
import { ReplacePipe } from "src/app/pipe/replace.pipe";

@NgModule({
    declarations:[
        ReplacePipe
    ],
    exports:[
        ReplacePipe
    ]
})

export class AppPipeModule{

}