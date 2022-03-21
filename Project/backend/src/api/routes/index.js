// import { Express } from "express";
import controller from "../controllers";
// import middleware from "../middleware";

export default function (app) {
    // Test endpoints
    // app.get("/test/", middleware.authenticate, controller.getAuthUser);
    app.get("/test/", controller.getTest);
}