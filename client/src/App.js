import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';
import './App.css';
import dontKnowLogo from './dontknow.png';
import DesktopContainer from './components/DesktopContainer';
import MobileContainer from './components/MobileContainer';


const ResponsiveContainer = ({ children, menuItems }) => (
  <div>
    <DesktopContainer menuItems={menuItems}>{children}</DesktopContainer>
    <MobileContainer menuItems={menuItems}>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.node).isRequired,
};

class App extends Component {
    renderHeader = header => <Header key={header} as="h3" style={{ fontSize: '2em' }} content={header} />;

    renderTextContent = ({ header, text }) => [
      this.renderHeader(header),
      <p key={text} style={{ fontSize: '1.33em' }}>{text}</p>,
    ];

    renderListItem = ({ link, name, description }) => (
      <List.Item>
        <List.Header as="a" href={link} content={name} />
        <List.Description content={description} />
      </List.Item>
    );

    render() {
      const menuItems = [
        <Menu.Item key="Demo" as="a" active>Demo</Menu.Item>,
        <Menu.Item key="VerbNet" as="a" href="http://amelia.ai/">Amelia</Menu.Item>,
      ];

      const content1 = {
        header: 'Which course should I take to get started in data science?',
        text: "Hmm...I'm not sure what the best possible course for a beginner in data science is.",
      };
      const content2 = {
        header: 'What is the best possible approach to learn aeronautical engineering?',
        text: 'I am not sure what the best advice for a beginner in aeronautical engineering is.',
      };
      const content3 = {
        header: 'Contextualization and Increased Interaction',
        text: 'Customized and controlled responses not only provide paraphrasing ability and contextualization but also improve the interaction with the user reducing monotonicity drastically.',
      };
      const content4 = {
        header: 'Domain specific dialog systems most of the times prefer restricting themselves to limited domains',
        text: 'Such systems will need to reply to out-of-domain and random user queries smartly.',
      };

      const link1 = {
        link: 'https://www.aclweb.org/anthology/2020.acl-main.69.pdf',
        name: 'Syn-QG: Syntactic and Shallow Semantic Rules for Question Generation',
        description: 'Transparent syntactic rules leveraging universal dependencies, shallow semantic parsing, lexical resources, and custom rules which transform declarative sentences into question-answer pairs. Generate a larger number of highly grammatical and relevant questions than previous QG systems',
      };
      const link2 = {
        link: 'https://arxiv.org/pdf/1910.10683.pdf',
        name: 'Resolving Intent Ambiguities by Retrieving Discriminative Clarifying Questions',
        description: ' In order to disambiguate queries which are ambiguous between two intents, we propose a novel method of generating discriminative questions using a simple rule based system which can take advantage of any question generation system without requiring annotated data of clarification questions.',
      };
      const link3 = {
        link: 'https://arxiv.org/pdf/2006.00533.pdf',
        name: 'Benchmarking BioRelEx for Entity Tagging and Relation Extraction',
        description: 'Span-based multi-task architectures like DYGIE show 4.9% and 6% absolute improvements in entity tagging and relation extraction respectively over the previous state-of-art and that incorporating domain-specific information like embeddings pre-trained over related domains boosts performance',
      };

      return (
        <ResponsiveContainer menuItems={menuItems}>

          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  {this.renderTextContent(content1)}
                  {this.renderTextContent(content2)}
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image href="https://www.aclweb.org/anthology/2020.acl-main.69.pdf" rounded size="large" src={dontKnowLogo} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button primary size="huge" href="http://amelia.ai/">Check it out!</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled="internally" columns="equal" stackable>
              <Grid.Row textAlign="center">
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  {this.renderTextContent(content3)}
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  {this.renderTextContent(content4)}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
              {this.renderHeader('Other projects')}
              <List size="large">
                {this.renderListItem(link1)}
                {this.renderListItem(link2)}
                {this.renderListItem(link3)}
              </List>
              <Button as="a" basic primary size="large" href="https://www.aclweb.org/anthology/2020.acl-main.69.pdf">Read More</Button>
            </Container>
          </Segment>

          <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Other Resources" />
                    <List link inverted>
                      <List.Item as="a" href="https://www.aclweb.org/anthology/2020.acl-main.69.pdf">SynQG</List.Item>
                      <List.Item as="a" href="http://amelia.ai/">Amelia</List.Item>
                      <List.Item as="a" href="https://www.aclweb.org/anthology/2020.acl-main.69.pdf">Read</List.Item>
                      <List.Item as="a" href="https://bitbucket.org/kaustubhdhole/syn-qg">GitHub</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Applications" />
                    <List link inverted>
                      <List.Item as="a" href="http://amelia.ai/">Dialogue</List.Item>
                      <List.Item as="a" href="http://amelia.ai/">Improved User Interaction</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h4" inverted>Contact Us</Header>
                    <List link inverted>
                      <List.Item as="a" href="http://amelia.ai/">
                          Research and Development, Amelia
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </ResponsiveContainer>
      );
    }
}

export default App;
