import React from 'react';
import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <div>
      PRODUCTION_DOMAIN--
      {process.env.PRODUCTION_DOMAIN}
      <h1>Hi there!!!!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
}