// Gets the data and outputs it to the `out` div
function fetchAndPrintData() {
  fetch('/api/data')
    .then(data => data.json())
    .then(json => document.getElementById('out').textContent = JSON.stringify(json) );
}

// Submits the form and refreshes the data
function submitForm() {
  event.preventDefault();

  const title = event.target.title.value;
  const description = event.target.description.value;

  fetch('/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description })
  })
  .then(() => fetchAndPrintData());

}

// run this on load
fetchAndPrintData();