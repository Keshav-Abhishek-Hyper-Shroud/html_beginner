const fs=require('fs');
data=fs.writeFileSync('JavaScripts_Writing.py','print("Hello World!")\nprint(5)');

const fsd=require('fs');
data=fsd.readFileSync('JavaScripts_Writing.py','utf-8');
console.log(data);