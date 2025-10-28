import React, { useContext } from 'react';
import { PlatformStateContext } from 'nr1';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

const RootNerdlet = () => {
  const { timeRange } = useContext(PlatformStateContext);

  return <h1>`Platform timeRange: ${timeRange}`</h1>
};

export default RootNerdlet;