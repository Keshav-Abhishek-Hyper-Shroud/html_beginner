// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Rohan Das');
  res.end(`

  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@800&display=swap');
        .mainframe{
            display: grid;
            width: 400px;
            height: 600px;
            border-radius: 10px;
            padding: 5px;
            grid-template-areas: 'screen screen screen screen' 'changecolor changecolor changebgcolor changebgcolor' 'clear reset percent delete' 'seven eight nine division' 'four five six multiply' 'one two three minus' 'zero dot equal plus';
        }

        #changecolor{
            grid-area: changecolor;
            margin-bottom: 10px;
            font-family: 'Times New Roman';
            font-size: 18px;
            margin-right: 2px;
            border-radius: 15px;
            cursor: pointer;
        }

        #changebgcolor{
            grid-area: changebgcolor;
            margin-bottom: 10px;
            font-family: 'Times New Roman';
            font-size: 18px;
            margin-left: 2px;
            border-radius: 15px;
            cursor: pointer;
        }

        #screen{
            grid-area: screen;
            border: 2px solid lightgray;
            height: 50px;
            border-radius: 10px;
            font-size: 30px;
            font-family: Baloo, 'Baloo Bhai 2', cursive;
            text-align: right;
        }

        .styleme{
            font-family: Baloo, 'Baloo Bhai 2', cursive;
            font-size: 40px;
            background-color: black;
            color: white;
            border-radius: 15px;
            margin: 3px;
            border: none;
        }

        #clear{
            grid-area: clear;
        }
        #reset{
            grid-area: reset;
        }
        #percent{
            grid-area: percent;
        }
        #delete{
            grid-area: delete;
        }
        #seven{
            grid-area: seven;
        }
        #eight{
            grid-area: eight;
        }
        #nine{
            grid-area: nine;
        }
        #division{
            grid-area: division;
        }
        #four{
            grid-area: four;
        }
        #five{
            grid-area: five;
        }
        #six{
            grid-area: six;
        }
        #multiply{
            grid-area: multiply;
        }
        #one{
            grid-area: one;
        }
        #two{
            grid-area: two;
        }
        #three{
            grid-area: three;
        }
        #minus{
            grid-area: minus;
        }
        #zero{
            grid-area: zero;
        }
        #dot{
            grid-area: dot;
        }
        #equal{
            grid-area: equal;
        }
        #plus{
            grid-area: plus;
        }
    </style>
</head>
<body>
    <div class="mainframe">
        <input type="text" id="screen" readonly=true>
        <button id="changecolor">Change text color of buttons</button>
        <button id="changebgcolor">Change background color of buttons</button>
        <button id="clear" class="styleme">C</button>
        <button id="reset" class="styleme">R</button>
        <button id="percent" class="styleme">%</button>
        <button id="delete" class="styleme">DEL</button>
        <button id="seven" class="styleme">7</button>
        <button id="eight" class="styleme">8</button>
        <button id="nine" class="styleme">9</button>
        <button id="division" class="styleme">/</button>
        <button id="four" class="styleme">4</button>
        <button id="five" class="styleme">5</button>
        <button id="six" class="styleme">6</button>
        <button id="multiply" class="styleme">X</button>
        <button id="one" class="styleme">1</button>
        <button id="two" class="styleme">2</button>
        <button id="three" class="styleme">3</button>
        <button id="minus" class="styleme">-</button>
        <button id="zero" class="styleme">0</button>
        <button id="dot" class="styleme">.</button>
        <button id="equal" class="styleme">=</button>
        <button id="plus" class="styleme">+</button>
    </div>
    <script>
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
    </script>
</body>
</html>

  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});