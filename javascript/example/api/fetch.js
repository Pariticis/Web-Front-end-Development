const select = document.querySelector('select');
const pre = document.querySelector('pre');

select.addEventListener('change', () => {
    const value = select.value;
    updateDisplay(value);
});

function updateDisplay(value) {
    verse = value.replace(" ","").toLowerCase();
    const url = `../../../stie/text/${verse}.txt`;

fetch(url)
   .then( (response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then( (text) => {
        pre.textContent = text;
    })
    .catch( (error) => {
        pre.textContent = `Error: ${error.message}`;
    });

};

updateDisplay("verse 1");
select.value = "verse 1";