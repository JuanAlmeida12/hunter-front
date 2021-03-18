import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';

export interface BadgeType {
    label?: string;
    icon?: string;
    color?: string;
    clicable?: boolean;
    onClick?: () => void;
}

const Badge: React.FC<BadgeType> = ({ label, icon, clicable, onClick }: BadgeType) => {
    return (
        <div
            onClick={() => clicable && onClick && onClick()}
            className={styles.container}
            style={{ cursor: clicable ? 'pointer' : 'none' }}
        >
            <FontAwesomeIcon icon={(icon as IconName) || 'coffee'} transform="shrink-6" fixedWidth />
            <label>{label}</label>
            <div className={styles.close}>
                <FontAwesomeIcon icon="times-circle" transform="shrink-6" fixedWidth />
            </div>
        </div>
    );
};

export default Badge;
