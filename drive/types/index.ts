import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title : String,
    containerStyles? : String,  
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType? : "button" | "submit",
    textStyles? : string,
    rightIcon? : String,
    isDisabled? : boolean 
}

export interface SearchManufacturerProps{
    manufacturer : String,
    setManufacturer: (manufacturer:string) => void 
}

export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:string;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;      
}
 