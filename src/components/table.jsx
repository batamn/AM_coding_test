import React, { useMemo, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import { Modal } from "./modal";

const priceFormatter = (column, colIndex, { sortElement, filterElement }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filterElement}
            {column.text}
            {sortElement}
        </div>
    );
};

export const Table = ({ buildingData, cellData }) => {
    const memoizedData = useMemo(() => { return buildingData; }, [buildingData]);
    const [selectedCell, setSelectedCell] = useState(null);
    const [show, setShow] = useState(false);

    const columns = [
        {
            dataField: "name",
            text: "Building Name",
            sort: true,
            filter: textFilter({
                delay: 1000,
                placeholder: "Search"
            }),
            headerFormatter: priceFormatter
        }
    ];

    const handleRowClick = (row) => {
        const closestCell = handleDistance(row, cellData);
        setSelectedCell(closestCell);
        setShow(true);
    }

    const handleDistance = (row, elements) => {
        let distanceArray = [];
        elements.map(cell => {
            distanceArray.push({ ...cell, distance: Math.hypot(row.x - cell.x, row.y - cell.y) });
        })
        distanceArray.sort((a, b) => a.distance - b.distance); //sorting array by distance
        return distanceArray[0]; //returning the shortest distanced celltower
    }

    const options = {
        onClick: (e, row) => handleRowClick(row)
    }

    return (
        <div>
            <BootstrapTable
                bootstrap4
                keyField="id"
                columns={columns}
                rowEvents={options}
                data={memoizedData}
                filter={filterFactory()}
            />
            <Modal show={show} setShow={setShow} selectedCell={selectedCell} />
        </div>
    )
}
