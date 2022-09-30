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

async function change(id, arr, param){
    try {
        const read = await fs.readFile('./text_test.txt','utf8');
        const obj = JSON.parse(read);
        console.log(id, arr);
        for (const key in obj) {
            const prop = obj[key]
            if(prop.id === id){
                prop[param].pop();
                prop[param].push(arr)
            }
        }
        const data = JSON.stringify(obj);
        await fs.writeFile('./text_test.txt', '')
        console.log('read file empty' + read);
        await fs.writeFile('./text_test.txt', data)
        console.log('read file on chainge' + read);
        console.log(data);
        console.log('end change file');
    } catch (error) {
        console.log(error);
    }
}
async function changeDelete(user){
    try {
        const read = await fs.readFile('./text_test.txt','utf8');
        const obj = JSON.parse(read);
        delete obj[user];
        const data = JSON.stringify(obj);
        await fs.writeFile('./text_test.txt', '')
        await fs.writeFile('./text_test.txt', data)
    } catch (error) {
        console.log(error);
    }
}
async function changeDeletePost(user){
    try {
        const read = await fs.readFile('./text_test.txt','utf8');
        const obj = JSON.parse(read);
        obj[user].post = [];
        const data = JSON.stringify(obj);
        await fs.writeFile('./text_test.txt', '')
        await fs.writeFile('./text_test.txt', data)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {time , writeToFile, deleteObjectFile, readFromFile, change, changeDelete}

