import React from 'react';
import AgentsWrapper from './style';
import Container from "../../../Common/Container"

const Agents = () => {
    return (
        <AgentsWrapper>
            <Container>
            <h3 className="title">СОТРУДНИЧЕСТВО С АГЕНТАМИ</h3>
            <div className="bottom">
                <div className="left">
                    <img src="/images/partners.png" alt="" />
                </div>
                <div className="right">
                    <p>
                    Московская Академия Предпринимательства предлагает выгодные условия сотрудничества по набору на программы ВО, СПО, ДПО, послевузовского образования на условиях агентского договора.
Условия обговариваются индивидуально. Агентские выплаты до 50% от стоимости программ.
Условия обговариваются индивидуально. Агентские выплаты до 50% от стоимости программ.
    Условия обговариваются индивидуально. Агентские выплаты до 50% от стоимости программ.
                    </p>
                </div>
            </div>
            </Container>
        </AgentsWrapper>
    );
};

export default Agents;