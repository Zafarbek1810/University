import React from 'react';
import AgentsWrapper from './style';
import Container from "../../../Common/Container"
import { useTranslation } from 'react-i18next';

const Agents = () => {
    const {t} = useTranslation();
    return (
        <AgentsWrapper>
            <Container>
            <h3 className="title">{t("partnerPage.agent.title")}</h3>
            <div className="bottom">
                <div className="left">
                    <img src="/images/partners.png" alt="" />
                </div>
                <div className="right">
                    <p>
                    {t("partnerPage.agent.text")}
                    </p>
                </div>
            </div>
            </Container>
        </AgentsWrapper>
    );
};

export default Agents;