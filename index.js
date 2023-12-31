/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
4. Modif pour tester nouveau commit sur gitHUb.com
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    /* Pass your questions in here */
    {message: "Type in your URL : ", 
    name: "URL"}
  ])
  .then((answers) => {
    // Use us r feedback for... whatever!!
    console.log(answers);
    const url = answers.URL;
    console.log(url);
    //qr.image = 'qr-image';
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr-image.png'));
    fs.writeFile('message.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Error detected")
    } else {
      // Something else went wrong
      console.log("An unknown error has been detected")
    }
  });
  


//var fs =require('fs');
//qr_png.pipe(require('fs').createWriteStream(url));
 

