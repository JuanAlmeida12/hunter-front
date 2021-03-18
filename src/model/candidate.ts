type Candidate = {
    id: number;
    city: string;
    experience: string;
    technologies: {
        name: string;
        is_main_tech: boolean;
    }[];
};

export default Candidate;
