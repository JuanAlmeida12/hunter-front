import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { isEmpty, without } from 'ramda';
import InputText from '../../components/forms/textInput';
import ComboBox from '../../components/forms/comboBox';
import Badge from '../../components/badge';
import Candidate from '../../model/candidate';
import CandidateItem from '../../components/candidateItem';
import useMobileDetect from '../../utils/useMobileDetect';
import { getCities, getExp, getCandidates } from '../../service/api';

import styles from './styles.module.css';

type Filter = {
    tech: string[];
    cities: string[];
    exps: string[];
};

const Home: React.FC = () => {
    const [citiesCombo, setCitiesCombo] = useState<string[]>([]);
    const [expsCombo, setExpsCombo] = useState<string[]>([]);
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [filters, setFilters] = useState<Filter>({ tech: [], cities: [], exps: [] });

    const detectMobile = useMobileDetect();

    const controlsList = useAnimation();
    const controlsForm = useAnimation();

    const { tech, cities, exps } = filters;

    if (isEmpty(tech) && isEmpty(cities) && isEmpty(exps)) {
        controlsList.start({ [detectMobile.isMobile() ? 'height' : 'width']: '0%' });
        controlsForm.start({ [detectMobile.isMobile() ? 'height' : 'width']: '100%' });
    } else {
        controlsList.start({ [detectMobile.isMobile() ? 'height' : 'width']: '50%' });
        controlsForm.start({ [detectMobile.isMobile() ? 'height' : 'width']: '50%' });
    }

    const onFilterchange = (filter: string, value: string) => {
        if (filter === 'tech') {
            const techsNew = without([''], value.split(','));
            return setFilters({ cities, exps, tech: techsNew });
        }
        if (filter === 'cities') {
            cities.push(value);
            return setFilters({ tech, exps, cities: cities });
        }

        if (filter === 'exps') {
            exps.push(value);
            return setFilters({ tech, cities, exps: exps });
        }
    };

    useEffect(() => {
        getCities().then(({ data }) => setCitiesCombo(data));
        getExp().then(({ data }) => setExpsCombo(data));
    }, []);

    const removeOnclick = (toRemove: string, filter: string) => {
        if (filter === 'tech') return setFilters({ ...filters, tech: without([toRemove], tech) });
        if (filter === 'cities') {
            return setFilters({ ...filters, cities: without([toRemove], cities) });
        }
        return setFilters({ ...filters, exps: without([toRemove], exps) });
    };

    const renderFilters = () => {
        const results = [];
        for (const city in cities) {
            results.push(
                <Badge
                    key={`${city}-${cities[city]}`}
                    onClick={() => removeOnclick(cities[city], 'cities')}
                    label={cities[city]}
                    icon="map-marker"
                    clicable
                />,
            );
        }

        for (const tec in tech) {
            results.push(
                <Badge
                    key={`${tec}-${tech[tec]}`}
                    onClick={() => removeOnclick(tech[tec], 'tech')}
                    label={tech[tec]}
                    icon="terminal"
                    clicable
                />,
            );
        }

        for (const exp in exps) {
            results.push(
                <Badge
                    key={`${exp}-${exps[exp]}`}
                    onClick={() => removeOnclick(exps[exp], 'exps')}
                    label={exps[exp]}
                    icon="business-time"
                    clicable
                />,
            );
        }

        return results;
    };

    useEffect(() => {
        let results = '';
        for (const city in cities) {
            results += `&location=${encodeURI(cities[city])}`;
        }

        for (const tec in tech) {
            results += `&techs=${encodeURI(tech[tec])}`;
        }

        for (const exp in exps) {
            results += `&exp=${encodeURI(exps[exp])}`;
        }

        getCandidates(results).then(({ data }) => setCandidates(data));
    }, [filters]);

    return (
        <div className={styles.container}>
            <motion.div animate={controlsForm} className={styles.formsContainer}>
                <div className={styles.forms}>
                    <h1>Hunter</h1>
                    <InputText
                        label="Tecnologia"
                        icon="terminal"
                        placeholder="Java, Python, C#"
                        onChange={(value) => onFilterchange('tech', value)}
                    />
                    <ComboBox
                        label="Localização"
                        icon="map-marker"
                        items={citiesCombo}
                        onSelect={(value) => onFilterchange('cities', value)}
                    />
                    <ComboBox
                        label="Experiencia"
                        icon="business-time"
                        items={expsCombo}
                        onSelect={(value) => onFilterchange('exps', value)}
                    />
                </div>
            </motion.div>
            <motion.div animate={controlsList} className={styles.listContainer}>
                <div className={styles.filters}>{renderFilters()}</div>
                <div className={styles.list}>
                    {candidates.map((ca: Candidate) => (
                        <CandidateItem key={ca.id} candidate={ca} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
