const fs = require('fs');

export default class Page {

    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open(path) {
      return browser.url(path);
    }
  
    /**
    * Write a txt file with the information and the name sent by parameter
    * @param data information to write to the file
    * @param name file name
    */
   async writeAFile(data, name) {
    fs.writeFile(`${name}.txt`, data.join('\n'), function(err) {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully.');
        }
    });
}
}
