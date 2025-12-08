"use client";

import { ContentHome } from "@/types";
import { getIntlayer, Locales } from "intlayer";
import { useLocale } from "next-intlayer";
import { useState } from 'react';
import DatePicker from 'react-date-picker';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const sum = (value: string | number): number => {
    // sum each digit in value until single digit is obtained
    const valueStr = value.toString();
    let total = 0;
    for (const char of valueStr) {
        const digit = parseInt(char);
        if (!isNaN(digit)) {
            total += digit;
        }
    }
    
    return total < 10 ? total : sum(total);   
}

const arrToStr = (arr: number[]) => {
    return arr.map(num => num.toString());
}

export default function DatePickerSection() {
    const {locale} = useLocale();
    const content = getIntlayer("page-home", locale) as ContentHome;
    const [value, onChange] = useState<Value>(new Date());

    const splitDate = (date: ValuePiece) => {
        if(!date) {
            return [0,0,0];
        }

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        if(locale === Locales.TURKISH) {
            return [day, month, year];
        }
        return [month, day, year];
    }

    const dateArr = splitDate(value as ValuePiece);
    const dateArrStr = arrToStr(dateArr);
    const dateTotal = dateArr[0] + dateArr[1] + dateArr[2]

    return <div className="page-section w-full mx-0 px-0">
        <hr className="page-break"></hr>
        <div className="w-auto m-auto flex flex-col justify-center items-center gap-4">
            <em>{content.datePickerQuote}</em>
            <DatePicker className="w-full" onChange={onChange} value={value} locale={locale} clearIcon={null} />
            <div className="flex flex-col text-sm gap-4">
                <div>
                    <div>
                        {`${dateArrStr[0]} + ${dateArrStr[1]} + ${dateArrStr[2]}`} = {`${dateTotal}`}
                    </div>
                    <div>
                        (({`${dateTotal.toString()[0]} + ${dateTotal.toString()[1]} + ${dateTotal.toString()[2]} + ${dateTotal.toString()[3]}`}) = {Number(dateTotal.toString()[0]) + Number(dateTotal.toString()[1]) + Number(dateTotal.toString()[2]) + Number(dateTotal.toString()[3])}) mod 9 = {(sum((dateArr[0] + dateArr[1] + dateArr[2]) % 9).toString())}
                    </div>
                </div>
                
                <div>
                    <div>{`${dateArrStr[0]} + ${dateArrStr[1]} + ${dateArrStr[2]}`}</div>
                    <div>(({`${sum(dateArrStr[0])} + ${sum(dateArrStr[1])} + ${sum(dateArrStr[2])}`}) = {sum(dateArrStr[0]) + sum(dateArrStr[1]) + sum(dateArrStr[2])}) mod 9 = {`${(sum(dateArrStr[0] + dateArrStr[1] + dateArrStr[2])) % 9}`} </div>
                </div>
            </div>

        </div>
        
    </div>
}