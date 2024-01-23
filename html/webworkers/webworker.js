/* 
Since web workers are in external files, they do not have access to the following JavaScript objects:

The window object
The document object
The parent object

*/

var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout('timedCount()', 500);
}

timedCount();
