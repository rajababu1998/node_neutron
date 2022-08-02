const fs = require('fs');

// writefile - create a file and write some content.
// readfile - read a file.

// fs.writeFile('file2.txt','i work at NS-new',(err) => {
//     if(err) {
//         console.log('file creation failed-',err);
//     }
//     else {
//         console.log('successfully created file')
//         fs.readFile('file.txt','utf-8',(err,file) => {
//             if(err) {
//                 console.log('file reading failed-',err);
//             }
//             else {
//                 console.log('file content ++++++',file);
//             }
//         })
//     }
// });


// rename the file

// fs.rename('file2.txt','file1.txt',(err) => {
//     if(err) {
//         console.log('file renaming failed',err);
//     }
//     else {
//         console.log('file renamed successfully');
//     }
// })


// delete the file

// fs.unlink('file2.txt',(err) => {
//     if(err) {
//         console.log('file deleting failed',err);
//     }
//     else {
//         console.log('file deleted successfully');
//     }
// })


// to append some content in created file.

fs.appendFile('file.txt','my country is india',(err) => {
    if(err) {
        console.log('file appending failed',err);
    }
    else {
        console.log('file appended successfully');
    }
});