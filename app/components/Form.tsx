'use client';

import { FC, useState } from 'react';
import Numpad from './Numpad';

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const [isPadOpen, setIsPadOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(false);
  const [introductionNumber, setIntroductionNumber] = useState<string>();
  const [isIntroduction, setIsIntroduction] = useState<boolean>(false);

  const handleOnChange = (num: number) => {
    const numStr = `${num}`;
    if (isPhoneNumber) {
      if (phoneNumber) {
        setPhoneNumber(phoneNumber + numStr);
      } else {
        setPhoneNumber(numStr);
      }
    }
    if (isIntroduction) {
      if (introductionNumber) {
        setIntroductionNumber(introductionNumber + numStr);
      } else {
        setIntroductionNumber(numStr);
      }
    }
  };
  const handleClear = () => {
    if (isPhoneNumber) {
        console.log('is phone true');
      if (phoneNumber) {
        const removedStr = phoneNumber.slice(0, -1);
        setPhoneNumber(removedStr);
      }
    }
    if (isIntroduction) {        
      if (introductionNumber) {
        const removedStr2 = introductionNumber.slice(0, -1);
        setIntroductionNumber(removedStr2);
      }
    }
  };
  const handleCheck = () => {
    setIsPadOpen(false)
  }
  const handleSend = () => {

  }

  return (
    <form className="flex flex-col justify-center items-center gap-8 w-full sm:w-96">
      <div className="field-input">
        <label htmlFor="name">نام و نام خانوادگی</label>
        <input id="name" type="text" className="inp" onFocus={e => {setIsPadOpen(false)}} />
      </div>
      <div className="field-input">
        <label htmlFor="phoneNumber">شماره تلفن</label>
        <input
          id="phoneNumber"
          type="text"
          className="inp"
          onFocus={(e) => {
            e.preventDefault();
            setIsPadOpen(true);
            setIsIntroduction(false);
            setIsPhoneNumber(true);
          }}
          value={phoneNumber}
        />
      </div>
      <div className="field-input">
        <label htmlFor="introductionNumber">کد معرفی</label>
        <input
          id="introductionNumber"
          type="text"
          className="inp"
          onFocus={(e) => {
            e.preventDefault();
            setIsPadOpen(true);
            setIsPhoneNumber(false);
            setIsIntroduction(true);
          }}
          value={introductionNumber}
        />
      </div>
      {/* {isPadOpen && ( */}
        <Numpad
          handleOnChange={handleOnChange}
          value={isPhoneNumber ? phoneNumber : introductionNumber}
          clear={handleClear}
          handleCheck={handleCheck}
          handleSend={handleSend}
          active={isPadOpen}
        />
      {/* )} */}
    </form>
  );
};

export default Form;
