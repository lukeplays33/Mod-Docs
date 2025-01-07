function waitForElement(selector, callback) {
    const intervalId = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(intervalId);
        callback();
      }
    }, 500);
  }

  function createInfoTable(items, json) { //creates a display table to read variable info
    let i;

    let table = document.createElement('table');

    for (i of items) {

        let tr = document.createElement('tr');

        if (json[i]) {
            let name = document.createElement('td');
            name.innerHTML = i;

            let value = document.createElement('td');
            value.innerHTML = json[i];

            tr.appendChild(name);
            tr.appendChild(value);
        }

        table.appendChild(tr);
    }

    return table;
}
  export { waitForElement, createInfoTable };