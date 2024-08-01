import React, { useEffect, useState } from 'react';
import axios from 'axios';
import myImage from './assets/images/dreams_logo.png';

import { Container, List, ListItem, ListItemText, Typography, Accordion, AccordionDetails, AccordionSummary, Tabs, Tab, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    const [questions, setQuestions] = useState([]);
    const [topics, setTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(0);
    const [expanded, setExpanded] = React.useState(false);

    useEffect(() => {
        axios.get('https://linnovate.ddev.site:8443/jsonapi/node/question')
            .then(response => {
                setQuestions(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
            });

        axios.get('https://linnovate.ddev.site:8443/jsonapi/taxonomy_term/tags')
            .then(response => {
                setTopics(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching topics:', error);
            });
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChangeTab = (event, newValue) => {
        setSelectedTopic(newValue);
    };

    return (
        <>
            <Container id="container">
                <Container id="img-container">
                    <img id="logo" src={myImage} alt="logo" />
                    <Typography variant="h4" gutterBottom><b>שאלות נפוצות: כל מה שצריך לדעת על תכנון האירוע המושלם שלכם</b></Typography>
                </Container>
                <Tabs value={selectedTopic} onChange={handleChangeTab}>
                    {topics.map((topic, index) => (
                        <Tab label={topic.attributes.name} key={topic.attributes.drupal_internal__tid} />
                    ))}
                </Tabs>
                <Box mt={2}>
                    <List>
                        {questions
                            .filter(question => question.relationships.field_topic.data.meta.drupal_internal__target_id === topics[selectedTopic].attributes.drupal_internal__revision_id)
                            .map(question => (
                                <ListItem key={question.id}>
                                    <ListItemText>
                                        <Accordion expanded={expanded === question.id} onChange={handleChange(question.id)}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                            >
                                                <Typography ><b>{question.attributes.title}</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                <b>{question.attributes.body.value}</b>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </ListItemText>
                                </ListItem>
                            ))}
                    </List>
                </Box>
            </Container>
        </>
    );
};
export default FAQ;