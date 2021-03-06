import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper className="myFont">
      <section>
        <FormattedMessage {...messages.tagline} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <a href="https://github.com/superarius">ari</a>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
