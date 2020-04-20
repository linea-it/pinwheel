import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useParams } from 'react-router-dom';
import TabPanel from '../../components/TabPanel';
import ProcessSummary from '../ProcessSumary';

function Process() {
  const { id } = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Process Summary" />
          <Tab label="Results" />
          <Tab label="Commensts" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProcessSummary />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>{`Results - Process ${id}`}</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>{`Commensts - Process ${id}`}</h1>
      </TabPanel>
    </div>
  );
}

export default Process;
