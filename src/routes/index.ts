import express from "express";

// importing routes
// import products_routes from "../controllers/products";
import users_routes from "../controllers/users";
// import orders_routes from "../controllers/orders";
// import dashboard_routes from "../controllers/dashboard";
import colors_routes from "../controllers/colors";
// import sizes_routes from "../controllers/sizes";
import addresses_routes from "../controllers/addresses";

const routes = (app: express.Application): void => {
    // exporting routes
    // products_routes(app);
    users_routes(app);
    // orders_routes(app);
    colors_routes(app);
    // sizes_routes(app);
    addresses_routes(app);
    // dashboard_routes(app);
}

export default routes;
