import { Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import ParsingDemoContainer from '../redux/containers/ParsingDemoContainer';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      textAlign="center"
      content="Natural Don't Know"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '1.5em',
      }}
    />
    <ParsingDemoContainer mobile={mobile} />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

HomepageHeading.defaultProps = {
  mobile: false,
};

export default HomepageHeading;
