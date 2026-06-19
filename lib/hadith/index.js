import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


 

// hadith object - Module Scaffolding 
 const hadith = {};

 hadith.allHadith = function allhadith(){

    try{
        const data = fs.readFileSync(path.join(__dirname, 'hadith.txt') , 'utf-8')

        const arrayOfHadith = data.split(/\r?\n/);

        return arrayOfHadith;
    }
    catch(err){
        console.log(err);
    }
 }


 export default hadith;