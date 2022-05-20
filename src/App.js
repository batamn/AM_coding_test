import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { Table } from './components/table';
import buildings from './components/data/buildings.json';
import cells from './components/data/cells.json';

function App() {

  const buildingData = useMemo(() => buildings, [buildings]);
  const cellData = useMemo(() => cells, [cells]);


  return (
    <div className="App">
      {buildingData && <Table buildingData={buildingData} cellData={cellData} />}
    </div>
  );
}

export default App;
