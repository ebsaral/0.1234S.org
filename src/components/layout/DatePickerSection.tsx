'use client';

import { ContentHome } from '@/types';
import { getIntlayer, Locales } from 'intlayer';
import { useLocale } from 'next-intlayer';
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
};

export default function DatePickerSection() {
  const { locale } = useLocale();
  const content = getIntlayer('page-home', locale) as ContentHome;
  const [value, onChange] = useState<Value>(new Date());

  const sumInsertion = content.datePicker.sumInsertion;

  const splitDate = (date: ValuePiece) => {
    if (!date) {
      return [0, 0, 0];
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (locale === Locales.TURKISH) {
      return [day, month, year];
    }
    return [month, day, year];
  };

  const dateArr = splitDate(value as ValuePiece);
  const dateTotal = dateArr[0] + dateArr[1] + dateArr[2];
  const firstDateTotalSum =
    Number(dateTotal.toString()[0]) +
    Number(dateTotal.toString()[1]) +
    Number(dateTotal.toString()[2]) +
    Number(dateTotal.toString()[3]);
  const sumOfDateParts = sum(dateArr[0]) + sum(dateArr[1]) + sum(dateArr[2]);
  const mod = {
    text: content.datePicker.mod.text({ value: content.datePicker.mod.value }),
    value: content.datePicker.mod.value,
  };

  return (
    <div className='page-section w-full mx-0 px-0'>
      <div className='w-auto m-auto flex flex-col justify-center items-center gap-4'>
        <em>{content.datePicker.quote}</em>
        <DatePicker className='w-full' onChange={onChange} value={value} locale={locale} clearIcon={null} />
        <div className='flex flex-col text-sm gap-4'>
          <div>
            <em>{content.datePicker.description}</em>
          </div>
          <div>
            <div>
              {`${dateArr[0]} + ${dateArr[1]} + ${dateArr[2]}`} = {`${dateTotal}`}
            </div>
            <div>
              {sumInsertion({ value: dateTotal })} = {firstDateTotalSum}, {sumInsertion({ value: firstDateTotalSum })} ≡{' '}
              {sum(dateTotal) % mod.value} {mod.text}
            </div>
          </div>

          <div>
            <div>
              {sumInsertion({ value: dateArr[0] })} + {sumInsertion({ value: dateArr[1] })} +{' '}
              {sumInsertion({ value: dateArr[2] })} = {sumOfDateParts}, {sumInsertion({ value: sumOfDateParts })} ≡{' '}
              {`${sum(dateArr[0] + dateArr[1] + dateArr[2]) % mod.value}`} {mod.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
