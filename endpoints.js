/*******************************************************************************
* File: endpoints.js
* Summary: Contains the various endpoints available to the server.  They can be
*          accessed from this file via dot notation.
*          - getRoot: Returns a string to the caller.
*          - postData: Receives a JSON object with name and callsign.
*    NOTE: Using "exports.{something}" allows the developer to require this file
*          and then access the attendant function as a property of the import.
*
* ~~ Holiness to the Lord ~~
*******************************************************************************/



/*******************************************************************************
* Function: getRoot
*
* Description: Responds to a GET request.  Sends a string to the caller.
*
* @param req - The request from the caller.
* @param resp - The response object used to send data back to the caller.
*******************************************************************************/
exports.getRoot = function getRoot (req, resp)
{
   let responseStr = "Hello, root-getters!";
   resp.send(responseStr);
}



/*******************************************************************************
* Function: postData
*
* Description: Responds to a POST request.  Expects a JSON object with the
*              following properties in req.body:
*              - name
*              - callsign
*
* @param req - The request from the caller, including the bodyString parameter.
* @param resp - The response object used to send data back to the caller.
*******************************************************************************/
exports.postData = function postData (req, resp)
{
   resp.send("CQ CQ CQ, " + req.body.callsign + "!");
}