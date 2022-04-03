
var tabledata = [
    {id:"T00001", title:"Aliquam elementum dolor purus", assignedTo:"Oli Bob"},
    {id:"T00002", title:"Morbi egestas odio vestibulum leo eleifend, ac ultrices urna mollis", assignedTo:"Mary May"},
    {id:"T00003", title:"Maecenas varius nulla et mi ultric", assignedTo:"Christine Lobowski"},
    {id:"T00004", title:"Sed ac volutpat orci, at dignissim nunc", assignedTo:"Brendon Philips"},
    {id:"T00005", title:"Etiam consequat porta neque et vestibulum", assignedTo:"Margret Marmajuke"},
    {id:"T00006", title:"Duis nec volutpat justo", assignedTo:"Frank Harbours"},
    {id:"T00007", title:"Suspendisse ultrices, dolor ut rhoncus pellentesque", assignedTo:"Christine Lobowski"},
    {id:"T00008", title:"Sed pulvinar viverra urna id bibendum", assignedTo:"Mary May"},
    {id:"T00009", title:"Duis ornare semper leo, id porta nisi maximus eget.", assignedTo:"Christine Lobowski"},
    {id:"T00010", title:"Vestibulum vestibulum felis sem, eget fringilla urna ullamcorper non", assignedTo:"Brendon Philips"},
    {id:"T00011", title:"Etiam sed euismod dolor, quis facilisis dui.", assignedTo:"Margret Marmajuke"},
    {id:"T00012", title:"Phasellus egestas, neque nec mole", assignedTo:"Frank Harbours"},
];
    //define data array
    var table = new Tabulator("#example-table", {
    data:tabledata,           //load row data from array
    layout:"fitColumns",      //fit columns to width of table
    responsiveLayout:"hide",  //hide columns that dont fit on the table
    tooltips:true,            //show tool tips on cells
    pagination:"local",       //paginate the data
    paginationSize:10,         //allow 10 rows per page of data
    paginationCounter:"rows", //display count of paginated rows in footer
    movableColumns:true,      //allow column order to be changed
    resizableRows:true,       //allow row order to be changed
    initialSort:[             //set the initial sort order of the data
        {column:"id", dir:"asc"},
    ],
    columns:[                 //define the table columns
        {title:"Id", field:"id", widthGrow:1},
        {title:"Title", field:"title", widthGrow:5},
        {title:"Assigned To", field:"assignedTo", widthGrow:2},
    ],
});
