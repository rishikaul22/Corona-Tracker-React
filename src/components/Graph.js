import React, { useContext, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import CoronaContext from '../context/corona/coronaContext';
import Spinner from './Spinner';

const Graph = () => {
  let data = [];
  const coronaContext = useContext(CoronaContext);

  const { history, getDailyData, setLoading, loading } = coronaContext;
  useEffect(() => {
    setLoading();
    getDailyData();
    // eslint-disable-next-line
  }, []);
  if (history.length > 0) {
    data = history.map(historydata => ({
      name: historydata.day,
      Total: historydata.total.confirmed,
      Recovered: historydata.total.recovered,
      Deaths: historydata.total.deaths,
      Active: historydata.total.active
    }));
    console.log(history);
    //console.log(day);
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='row'>
      <div className='col s12 m12 l12 xl12'>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type='monotone' dataKey='Total' stroke='#004e92' />
            <Line type='monotone' dataKey='Active' stroke='#7b4397' />
            <Line type='monotone' dataKey='Recovered' stroke='#0f9b0f' />
            <Line type='monotone' dataKey='Deaths' stroke='#6f0000' />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;