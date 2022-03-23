import controller from "../controllers";
import middleware from "../middleware";

export default function (app) {
    // Sample endpoints
    app.post("/sample/", controller.insertSample);  // insert one sample
    app.get("/sample/", controller.getAllSamples); // get all samples
    app.get("/sample/:id", controller.getOneSample); // get one sample
    app.put("/sample/:id", controller.updateSample); // update one sample
    app.delete("/sample/:id", controller.deleteSample); // delete one sample
    app.get("/sample/search/:search", controller.searchSamples); // search samples

    // Admin endpoints
    app.post("/admin/login/", controller.authAdmin);
    app.post("/admin/register/",middleware.adminAuthenticate, controller.createAdmin);

     // Workout endpoints
     app.post("/workout/", controller.insertWorkout);  // insert one workout
}