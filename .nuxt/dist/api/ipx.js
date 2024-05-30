import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"C:/Users/USER/Documents/venture-nuxt/static","domains":["fs1.hubspotusercontent-na1.net"],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
