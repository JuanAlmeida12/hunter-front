import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';

export interface ComboBoxType {
    label?: string;
    icon?: string;
    color?: string;
    items?: string[];
    onSelect?: (value: string) => void;
}

const ComboBox: React.FC<ComboBoxType> = ({ label, color, items, icon, onSelect }: ComboBoxType) => {
    const [open, set] = useState(false);

    const controlsDropdown = useAnimation();

    const refContainer = useRef<HTMLDivElement>(null);

    if (open) {
        controlsDropdown.start({
            display: 'block',
            height: 'fit-content',
        });
    } else {
        controlsDropdown.start({
            height: '0px',
            display: 'none',
        });
    }

    const onClick = (item: string) => {
        set(false);
        onSelect && onSelect(item);
    };

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (refContainer != null && refContainer.current && !refContainer.current.contains(event.target as Node)) {
                set(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [refContainer]);

    return (
        <div ref={refContainer} className={styles.container}>
            <div className={styles.dropdown}>
                <div
                    style={{ borderColor: open ? color || '#672079' : '#c6c6c6' }}
                    onClick={() => set(!open)}
                    className={styles.btnDropDown}
                >
                    <label style={{ color: color || '#672079' }}>{label}</label>
                    <motion.div
                        className={styles.arrow}
                        animate={{ rotate: open ? 180 : 0, bottom: open ? '5px' : '15px' }}
                        transition={{ duration: 0.2 }}
                    >
                        <FontAwesomeIcon size="2x" icon="sort-down" color={color || '#672079'} />
                    </motion.div>
                </div>
                <motion.div animate={controlsDropdown} className={styles.dropdownContent}>
                    {items &&
                        items.map((item) => {
                            return (
                                <div title={item} className={styles.itemList} onClick={() => onClick(item)} key={item}>
                                    <a>{item}</a>
                                    {icon && <FontAwesomeIcon icon={icon as IconName} color={color || '#672079'} />}
                                </div>
                            );
                        })}
                </motion.div>
            </div>
        </div>
    );
};

export default ComboBox;
