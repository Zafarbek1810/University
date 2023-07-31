import React from 'react';
import { TabWrapper } from '../../style';
import { data } from '../Tab1';
import PaperSvg from '../../../../../Common/Svgs/PaperSvg';

const Tab5 = () => {
    return (
      <TabWrapper>
      <div className="wrapper">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div className="left">
              <div className="filename">{item.filename}</div>
            </div>
            <div className="right">
              <a download={item.sig} href="#" className="sig">
                <PaperSvg />
                .sig
              </a>
              <a download={item.pdf} href="#" className="pdf">
                <PaperSvg />
                .pdf
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <button className="btn">+ Развернуть весь список документов</button>
      </div>
    </TabWrapper>
    );
};

export default Tab5;