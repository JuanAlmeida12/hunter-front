import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';

export interface InputTextType {
    label?: string;
    placeholder?: string;
    icon?: string;
    color?: string;
    defaultColor?: string;
    onChange?: (value: string) => void;
}

const InputText: React.FC<InputTextType> = ({
    label,
    placeholder,
    icon,
    color,
    defaultColor,
    onChange,
}: InputTextType) => {
    const controlsLabel = useAnimation();

    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');

    const onFocusChange = () => {
        setFocus(!focus);
    };

    if (focus || value) {
        controlsLabel.start({
            y: '4px',
            x: '-8px',
            scale: '.75',
            color: color || '#672079',
        });
    } else {
        controlsLabel.start({
            y: '16px',
            x: '0px',
            scale: '1',
            color: defaultColor || '#c6c6c6',
        });
    }

    const transform = ({ x, y, scale }: { scale: string; x: string; y: string }) => {
        return `translate(${x}, ${y}) scale(${scale})`;
    };

    return (
        <div className={styles.container}>
            <motion.label transformTemplate={transform} animate={controlsLabel}>
                {label}
            </motion.label>
            <span>
                <FontAwesomeIcon
                    icon={(icon as IconName) || 'coffee'}
                    color={focus || value ? color || '#672079' : defaultColor || '#c6c6c6'}
                    transform="shrink-6"
                    fixedWidth
                />
            </span>
            <input
                onFocus={onFocusChange}
                onBlur={onFocusChange}
                placeholder={focus ? placeholder : ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange && onChange(e.target.value);
                }}
                type="text"
                style={{ borderColor: focus ? color || '#672079' : defaultColor || '#c6c6c6' }}
            />
        </div>
    );
};

export default InputText;
