document.getElementById('changecolor').addEventListener('mousedown',function cngcolor(){
    let data=prompt('1. You can type the name of color.\n2. You may provide hexacode of color.\n\nBe sure the # must be present if you are providing hexacode.');

    if(data){
        let list=['clear', 'reset', 'percent', 'delete', 'seven', 'eight', 'nine', 'division', 'four', 'five', 'six', 'multiply', 'one', 'two', 'three', 'minus', 'zero', 'dot', 'equal', 'plus'];

        for (let index = 0; index < list.length; index++) {
            document.getElementById(list[index]).style.color=data;
        }
    }
});

document.getElementById('changebgcolor').addEventListener('mousedown',function cngbgcolor(){
    let data=prompt('1. You can type the name of color.\n2. You may provide hexacode of color.\n\nBe sure the # must be present if you are providing hexacode.');

    if(data){
        let list=['clear', 'reset', 'percent', 'delete', 'seven', 'eight', 'nine', 'division', 'four', 'five', 'six', 'multiply', 'one', 'two', 'three', 'minus', 'zero', 'dot', 'equal', 'plus'];

        for (let index = 0; index < list.length; index++) {
            document.getElementById(list[index]).style.backgroundColor=data;
        }
    }
});

// Capture Button Click

document.getElementById('seven').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '7';
});
document.getElementById('eight').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '8';
});
document.getElementById('nine').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '9';
});
document.getElementById('four').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '4';
});
document.getElementById('five').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '5';
});
document.getElementById('six').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '6';
});
document.getElementById('one').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '1';
});
document.getElementById('two').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '2';
});
document.getElementById('three').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '3';
});
document.getElementById('zero').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '0';
});

// Arithematic

document.getElementById('plus').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '+';
});
document.getElementById('minus').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '-';
});
document.getElementById('multiply').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + 'x';
});
document.getElementById('division').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '/';
});
document.getElementById('percent').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '%';
});
document.getElementById('dot').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value=document.getElementById('screen').value + '.';
});

// Non mathematical

document.getElementById('clear').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value='';
});

document.getElementById('delete').addEventListener('mousedown', ()=>{
    let data=document.getElementById('screen').value;
    let rest='';
    for (let index = 0; index < data.length-1; index++) {
        rest=rest+data[index]
    }
    document.getElementById('screen').value=rest;
});

// Final Operation

document.getElementById('equal').addEventListener('mousedown', ()=>{
    let data=document.getElementById('screen').value;
    data=data.replace('x','*');
    data=data.replace('%','/100'+'*');

    // Tackling Error

    try {
        let calculated_value=eval(data);
        document.getElementById('screen').value=calculated_value;
    } catch{
        document.getElementById('screen').value='NaN';
        setTimeout(() => {
            document.getElementById('screen').value='';
        }, 500);
    }

    if(document.getElementById('screen').value=='Infinity'){
        setTimeout(() => {
            document.getElementById('screen').value='';
        }, 500);
    }

    if(document.getElementById('screen').value=='undefined'){
        setTimeout(() => {
            document.getElementById('screen').value='';
        }, 500);
    }
});

// Reset

document.getElementById('reset').addEventListener('mousedown', ()=>{
    document.getElementById('screen').value='';

    let list=['clear', 'reset', 'percent', 'delete', 'seven', 'eight', 'nine', 'division', 'four', 'five', 'six', 'multiply', 'one', 'two', 'three', 'minus', 'zero', 'dot', 'equal', 'plus'];

    for (let index = 0; index < list.length; index++) {
        document.getElementById(list[index]).style.backgroundColor='black';
        document.getElementById(list[index]).style.color='white';
    }
});