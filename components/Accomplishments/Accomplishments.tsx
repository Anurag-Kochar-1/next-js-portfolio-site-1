import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
    { number: 3, text: 'Unique Valuable Projects' },
    { number: 300, text: 'Youtube Subscriber', },
    { number: 1, text: 'Hackathon attended', },
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