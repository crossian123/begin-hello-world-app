
// Other example responses

/* Forward requester to a new path
exports.handler = async function http (req) {
  return {
    statusCode: 302,
    headers: {'location': '/about'}
  }
}
*/
let arc = require('@architect/functions')
exports.handler = arc.http.async (http)
async function http (req) {
    const { exec } = require("child_process");

    exec("ls -al", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
  return {
    statusCode: 201,
    json: { ok: ${stdout} },
    cors: true,
  }
}

