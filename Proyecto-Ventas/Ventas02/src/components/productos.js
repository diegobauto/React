const columnas = [
    {
        label: 'codigo',
        field: 'codigo',
        width: 150,
        attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'codigo',
        },
    },
    {
        label: 'nombre',
        field: 'nombre',
        width: 270,
    },
    {
        label: 'stock',
        field: 'stock',
        width: 200,
    },
    {
        label: 'precio',
        field: 'precio',
        sort: 'asc',
        width: 100,
    },
    {
        label: 'acciones',
        field: 'acciones',
        sort: 'disabled',
        width: 100,
    },
]

export const columnasProductos = columnas;