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

    //Salary endpoints
    app.post("/salary/", controller.insertSalary);  // insert a salary
    app.put("/salary/:id",controller.updateSalary); //update a salary
    app.get("/salary/", controller.getAllSalaries); // get all salaries
    app.get("/salary/:id", controller.getOneSalary); // get a salary

    // Admin endpoints
    app.post("/admin/login/", controller.authAdmin);
    app.post("/admin/register/",middleware.adminAuthenticate, controller.createAdmin);

     // Workout endpoints
     app.post("/workout/", controller.insertWorkout);  // insert one workout
}