const fs = require('fs/promises');

function time(){
    const day = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return day +'-'+ time 
}
async function writeToFile(param){
    const data = JSON.stringify(param);
    try {
        await fs.writeFile('./text_test.txt', data);
        console.log('written on file');
    } catch (error) {
        console.log(error);
    }
    
}
async function deleteObjectFile(){
    try {
        await fs.writeFile('./text_test.txt','')
        console.log('file is restored');
    } catch (error) {
        console.log(error);
    }
}
function js(param){ 
    const users = JSON.parse(param);
    return {users};
}

async function readFromFile(){
    try {
        console.log('init read function');
        const data = await fs.readFile('./text_test.txt', 'utf-8');
        const users = JSON.parse(data);
        return {users}
    } catch (error) {
        console.log(error);   
    }
}
module.exports = {time , writeToFile, deleteObjectFile, readFromFile}

