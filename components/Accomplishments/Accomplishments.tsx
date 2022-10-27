import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
    { number: 20, text: 'Unique Valuable Projects' },
    { number: 1000, text: 'Twitter Follower', },
    { number: 2, text: 'Hackathons Won', },
    { number: 5000, text: 'Github Stars', }
];

const Accomplishments: React.FC = () => {
    return (
        <Section>
            <SectionTitle>Personal Achievements</SectionTitle>
            <Boxes>
                {data.map((card, index) => (
                    <Box key={index}>
                        <BoxNum>{`${card.number}+`}</BoxNum>
                        <BoxText>{card.text}</BoxText>
                    </Box>
                ))}
            </Boxes>
            <SectionDivider />
        </Section>
    )
}

export default Accomplishments