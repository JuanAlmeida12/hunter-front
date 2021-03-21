import React from 'react';
import { motion } from 'framer-motion';
import Candidate from '../../model/candidate';
import { forEach } from 'ramda';
import Avatar from './avatars';
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
        <motion.div
            animate={{
                scale: [0.8, 1, 1],
            }}
            key={candidate.id}
            className={styles.container}
        >
            <div className={styles.avatar}>
                <div className={styles.avatarBackground}></div>
                <Avatar />
            </div>
            <div className={styles.attrContainer}>
                <a className={styles.techLabel}>Candidato:</a>
                {candidate.id}
            </div>
            <div className={styles.attrContainer}>
                <a className={styles.techLabel}>Cidade:</a>
                {candidate.city}
            </div>
            <div className={styles.attrContainer}>
                <a className={styles.techLabel}>Tecnologias:</a>
                <div className={styles.techContainer}>{renderTechs()}</div>
            </div>
        </motion.div>
    );
};

export default CandidateCard;
