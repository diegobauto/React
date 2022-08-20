import React, {useEffect} from 'react';
import {MDBDataTableV5, MDBBadge} from 'mdbreact';

import {columnasProductos} from "./productos.js"

//Estilos para la tabla
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const initialState = {
    columns: [],
    rows: [],
}

export default function WithSortingComponent({valor}) {
    console.log("Aca que hay:", valor);
    
    const [datatable, setDatatable] = React.useState(initialState);

    useEffect(() => {

        setDatatable({
            columns: columnasProductos,
            rows: valor,
        })
    }, [setDatatable, valor])


    const badgesData = {
        columns: [
            {
                label: 'ID',
                field: 'badge',
            },
            ...datatable.columns,
        ],
        rows: [
            ...datatable.rows.map((row, order) => ({
                ...row,
                badge: (
                    <MDBBadge pill color='primary' classcodigo='p-1 px-2' key={order} searchvalue={order}>
                        ID: {order + 1}
                    </MDBBadge>
                ),
            })),
        ],
    };
    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} ppreciosamount={4} data={badgesData}
                           sortRows={['badge']}/>;
}