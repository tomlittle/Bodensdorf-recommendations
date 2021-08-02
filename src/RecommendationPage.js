import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n.js';
import "./recommendation.css";
import RecommendationTab from './RecommendationTab.js';

const RecommendationPage = () => {
	const { t } = useTranslation();

	return (
    <div className="body-bg">
	<div className="recommendationPage">
		<span className="recommendationTop">
			<div className="recommendationTitle">
				<h3>{t('recTitle')}</h3>
				<p>{t('recIntro')}</p>
			</div>
		</span>		
	  <div className="tab-wrapper">
		<div className='container-fluid' >
			<div className="row">
				<div className="col-sm-12">
					<Tabs defaultActiveKey="restaurants">
						<Tab eventKey="restaurants" title={t('recTab1')}>
							<div className="tab-item-wrapper">
								<RecommendationTab recType='restaurant' />
							</div>
						</Tab>
						<Tab eventKey="shopping" title={t('recTab2')}>
							<div className="tab-item-wrapper">
								<RecommendationTab recType='shopping' />
							</div>
						</Tab>
						<Tab eventKey="other" title={t('recTab3')}>
							<div className="tab-item-wrapper">
								<RecommendationTab recType='other' />
							</div>
						</Tab>
					</Tabs>
				</div>
			</div>
      </div>
    </div>				
	</div>
	</div>
	);
};

export default RecommendationPage;
