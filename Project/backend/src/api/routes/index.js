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

    //TrainerDB endpoints
    app.post("/blog/", controller.insertTrainerBD);  // insert one sample
    app.get("/blog/", controller.getAllTrainerBD); // get all samples
    app.get("/blog/:id", controller.getOneTrainerBD); // get one sample
    app.put("/blog/:id", controller.updateTrainerBD); // update one sample
    app.delete("/blog/:id", controller.deleteTrainerBD); // delete one sample
    //app.get("/blog/search/:search", controller.searchTrainerDB); // search samples

    // Admin endpoints
    app.post("/admin/login/", controller.authAdmin);
    app.post("/admin/register/",middleware.adminAuthenticate, controller.createAdmin);

     // Workout endpoints
     app.post("/workout/", controller.insertWorkout);  // insert one workout

    //Notice endpoints 
    app.post("/notice/", controller.insertNotice);  // insert one notice
    app.get("/notice/", controller.getAllNotices); // get all notices
    app.get("/notice/:id", controller.getOneNotice); // get one notice
    app.put("/notice/:id", controller.updateNotice); // update one notice
    app.delete("/notice/:id", controller.deleteNotice); // delete one notice
}