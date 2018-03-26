import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "resume"
})
export class ResumePipe implements  PipeTransform 
{
    transform(value: string, min_length: number = 10 ) 
    {
        if( value.length <= min_length ) return value;
        let formated: string =  value.substr(0, min_length) + "...";
        return formated;
    }
}