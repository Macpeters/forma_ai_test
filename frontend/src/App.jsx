import React from 'react';
import RevenueGraph from './Containers/RevenueGraph';
import TabWrapper, { Tab } from './Components/TabWrapper';
import './App.css';

const App = () => (
  <TabWrapper>
    <Tab title="Sales Rep" userId={203}>
      <RevenueGraph userId={203} />
    </Tab>
    <Tab title="Manager" userId={32} >
      <RevenueGraph userId={32} />
    </Tab>
    <Tab title="Director" userId={2} >
      <RevenueGraph userId={2} />
    </Tab>
  </TabWrapper>
);

export default App;
