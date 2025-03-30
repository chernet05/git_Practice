
document.querySelector('button').addEventListener('click',x=>{
    let val = document.getElementById('selector').value;
    console.log(val)
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(val, data, val);
        let len = data[val].length;
        let ran =Math.floor(Math.random()*len)
        return(data[val][ran]["joke"])

})
    .then(x=>document.querySelector("#jokes").innerHTML = x)
    .catch(er=>console.log(er))

})  