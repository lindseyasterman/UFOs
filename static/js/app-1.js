// import data from the data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// create function to build the data table
function buildTable(data) {
    // clear any existing data
    tbody.html("");

    // loop through each object in the data and append a row and cells for each value in the data
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each dataRow and add vaules as table cells (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick () {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check for date entered and filter with that date
    if (date){
        filteredData = filteredData.filter (row => row.datetime === date)
    };

    // build table with filtered data 
    buildTable(filteredData);
};

// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build table when page loads
buildTable(tableData);