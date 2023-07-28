import React from 'react';
import { TabWrapper } from '../../style';

const Tab4 = () => {
    return (
        <TabWrapper>
        <div className="cards">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="card">
              <img src="/images/card.png" alt="" />
              <div className="bottom">
                <h5 className="title">Tadbirkorlik</h5>
                <p className="descr">
                  Ish beruvchiga qaram bo'lishni xohlamaysizmi? O'z biznesingizni
                  oching!
                </p>
              </div>
            </div>
          ))}
        </div>
      </TabWrapper>
    );
};

export default Tab4;