////imports/////

const express = require("express");
const cors = require("cors");
const routes = require("./Routes")

const port = process.env.PORT || 4000;
const app = express();

////Middlewear/////
// app.use(cors());

///middleware - API routes
// app.use("/api/v1/course", routes.course);
// app.use("/api/v1/auth", routes.auth);
// app.use("/api/v1/user", routes.user);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));


