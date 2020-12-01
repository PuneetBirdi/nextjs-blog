
//THIS IS AN API ROUTE THAT CAN BE DIRECTLY ACCESSED IN OTHER PAGES.
//Using this method of api routing allows you to directly reference/query your db because this part of the code never makes it to the client bundle.
export default (req, res) => {
   res.status(200).json({ text: 'Hello' })
 }
 