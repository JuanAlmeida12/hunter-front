import React from 'react';
import Candidate from '../../model/candidate';
import { forEach } from 'ramda';
import styles from './styles.module.css';

export interface CandidateCardType {
    candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardType> = ({ candidate }: CandidateCardType) => {
    const { technologies } = candidate;

    const renderTechs = () => {
        const result: JSX.Element[] = [];
        forEach(
            (tech) =>
                result.push(<a className={`${styles.tech} ${tech.is_main_tech && styles.mainTech}`}>{tech.name}</a>),
            technologies,
        );
        return result;
    };

    return (
        <div key={candidate.id} className={styles.container}>
            <div>
                <a className={styles.techLabel}>Candidato:</a>
                {candidate.id}
            </div>
            <div>
                <a className={styles.techLabel}>Cidade:</a>
                {candidate.city}
            </div>
            <div>
                <a className={styles.techLabel}>Tecnologias:</a>
                <div className={styles.techContainer}>{renderTechs()}</div>
            </div>
        </div>
    );
};

export default CandidateCard;
