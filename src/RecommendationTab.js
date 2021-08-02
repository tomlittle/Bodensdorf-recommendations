import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n.js';
import "./recommendation.css";
import { recommendations } from './RecommendationData.js';

const RecommendationTab = ({recType}) => {
	const { t } = useTranslation();

	return (
        <CardColumns className="recommendationCards">
            {recommendations
                ? recommendations.map((rec) => {
                    return (
                        rec.type===recType ?
                        <Card className={rec.favorite}>
                            <Card.Body className="recBody">
                                <img className="recImage" src={rec.image} alt={rec.name} />
                                <Card.Title className="recTitle">
                                    <h5>{rec.name}</h5>
                                </Card.Title>
                                <Card.Subtitle className="recTitle">
                                    <span className="text-muted">{t(rec.subtitle)}</span>
                                </Card.Subtitle>
                                <Card.Text as="div">
                                    <p> <small className="text-muted">{t(rec.description)}</small></p>
                                </Card.Text>
                                { rec.map ? <Card.Link href={rec.map} target="_blank" rel="noreferrer">{t('gotoMap')}</Card.Link> : undefined }
                                { rec.link ? <Card.Link href={rec.link} target="_blank" rel="noreferrer">{t('gotoWeb')}</Card.Link> : undefined }
                            </Card.Body>
                        </Card>
                        : undefined
                    );
                })
                : undefined}
            </CardColumns>
    );
};

export default RecommendationTab;
