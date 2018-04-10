let spriteSheetId = '';

const url = 'https://docs.google.com/spreadsheets/d/1Z6fgUiz2zeTmte01i5ZwroQNCkpjysIP5gkeTFlb_CM'


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
console.log(error);
});   