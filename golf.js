let[r,g,p,h,l,f,d,b]=[Math.floor(Math.random()*101),1,0,100,1,'./d.json',{},100],n=Bun.file(f)  
if(await n.exists())d=await n.json()
function loop(){
do{
p=parseInt(prompt("Guess: "))
if(!Number.isInteger(p)||p<0||p>100||p>h||p<l)continue
if(g>5)console.log(`Hint:${r%2===0?'Even':'Odd'}`)
console.log(p===r?`Victory. Guessed ${g} times`:`${p>r?l+'-'+p:p+'-'+h}`)
p>r?h=p:l=p
g++
}while(p!==r)
if(!d[b]||g<d[b])d[b]=g
console.log(`Best Guess: ${d[b]-1}`)}
loop()
await Bun.write(f,JSON.stringify(d))