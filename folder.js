const fs = require('fs');
const os = require('os');

// fs.mkdir('lib2',(err) => {
//     if(err) {
//         console.log('folder creation failed');
//     }
//     else {
//         console.log('folder created successfully');

//         fs.writeFile('./lib2/log.txt', os.type() , (err) => {
//             if(err) {
//                 console.log('file creation failed-',err);
//             }
//             else {
//                 console.log('successfully created file')
//                 fs.readFile('./lib2/log.txt','utf-8',(err,file) => {
//                     if(err) {
//                         console.log('file reading failed-',err);
//                     }
//                     else {
//                         console.log('file content ++++++',file);
//                     }
//                 })
//             }
//         });
//     }
// })


// folder deletion.

// fs.rmdir('assets',(err) => {
//     if(err) {
//         console.log('folder deleted failed');
//     }
//     else {
//         console.log('folder deleted successfully');
//     }
// })


// to delete file inside the folder

// fs.unlink('./lib2/log.txt',(err) => {
//     if(err) {
//         console.log('file deleting failed',err);
//     }
//     else {
//         console.log('file deleted successfully');
//         fs.rmdir('lib2',(err) => {
//             if(err) {
//                 console.log('folder deleted failed');
//             }
//             else {
//                 console.log('folder deleted successfully');
//             }
//         })
//     }
// })



// readdir - read the whole file

fs.readdir('lib',(err,files) => {
    if(err) {
        console.log('read failed');
    }
    else {
        console.log(files);
        array.forEach(element => {
            fs.readFile(element,(err,filedata) => {
                if(err) {
                    console.log('file read failed for-',element);
                }
                else {
                    console.log(`content of ${element}-${filedata}`);
                }
            })
        });
    }
})