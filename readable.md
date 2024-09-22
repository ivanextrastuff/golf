# The file name is called readable.md because this makes `golf.js` readable
## Correct indentation of code
The formatting of golf.js was awful, so this is a file of `golf.js` with normal indentations:
```js
let [r, g, p, h, l, f, d, b] = [Math.floor(Math.random() * 101), 1, 0, 100, 1, './d.json',{},100]
let n = Bun.file(f)  
if (await n.exists()) d = await n.json()
function loop(){
  do{
    p = parseInt(prompt("Guess: "))
    if (!Number.isInteger(p) || p < 0 || p > 100 || p > h || p < l) continue
    if (g > 5) console.log(`Hint:${r % 2 === 0? 'Even' : 'Odd'}`)
    console.log(p === r ? `Victory. Guessed ${g} times` : `${p > r? l + '-' + p : p + '-' + h}`)
    p > r ? h = p : l = p
    g++
    } while(p !== r)
if (!d[b] || g < d[b]) d[b] = g
console.log(`Best Guess: ${d[b] - 1}`)}
loop()
await Bun.write(f, JSON.stringify(d))
```
## The variable names were also messed up so here is a guide
r: randomNumber <br>
g: no. of time player has guessed<br>
p: Player's guess<br>
h: the upper limit of the range<br>
l: the lower limit of the range<br>
f: file name (`./d.json`)<br>
d: database<br>
b: initial value for best guess<br>
n: Bun.file(`./d.json`)<br>
