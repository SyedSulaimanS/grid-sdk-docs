import { Grid, Page, Sort, Filter } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

Grid.Inject(Page, Sort, Filter);

const SERVICE_URL = 'https://services.syncfusion.com/js/production/api/orders';

const dataManager = new DataManager({
    url: SERVICE_URL,
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
    // Reuses the pages that were already fetched instead of requesting them again.
    enableCache: true
});

const grid = new Grid({
    dataSource: dataManager,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    pageSettings: { pageSize: 10 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140, type: 'string' },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 130, type: 'number' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 315
});

grid.appendTo('#Grid');
