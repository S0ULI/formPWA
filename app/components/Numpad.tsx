'use client';

import { FC, useState } from 'react';
import { FaBackspace } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

interface NumpadProps {
  handleOnChange?: any;
  handleCheck?: any;
  handleSend?: any;
  clear?: any;
  value: string | undefined;
  active?: boolean;
  status?: string;
}

const Numpad: FC<NumpadProps> = ({
  handleCheck,
  handleOnChange,
  handleSend,
  clear,
  active,
  status,
}) => {
  const [inputNumber, setInputNumber] = useState<string>();

  return (
    <div className="numericPad">
      <button className={'btn ' + (!active && 'btn-pad-open')}>ارسال</button>
      {active && (
        <div className="pad">
          <span className="status">{status}</span>
          <div className="row">
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(1);
              }}
            >
              1
            </button>
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(2);
              }}
            >
              2
            </button>
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(3);
              }}
            >
              3
            </button>
          </div>
          <div className="row">
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(4);
              }}
            >
              4
            </button>
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(5);
              }}
            >
              5
            </button>
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(6);
              }}
            >
              6
            </button>
          </div>
          <div className="row">
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(7);
              }}
            >
              7
            </button>
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(8);
              }}
            >
              8
            </button>
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(9);
              }}
            >
              9
            </button>
          </div>
          <div className="row">
            <button
              className="key-action"
              onClick={handleCheck}
              style={{ color: 'green' }}
            >
              <FaCheck />
            </button>
            <button
              className="key"
              onClick={(e) => {
                e.preventDefault();
                handleOnChange(0);
              }}
            >
              0
            </button>
            <button
              className="key-action"
              onClick={(e) => {
                e.preventDefault();
                clear();
              }}
            >
              <FaBackspace />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Numpad;
