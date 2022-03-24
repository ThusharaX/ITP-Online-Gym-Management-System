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

    // Question endpoints
    app.post("/question/", controller.insertQuestion);//insert one question
    app.put("/question/:id", controller.updateQuestion);//update one question
    app.delete("/question/:id", controller.deleteQuestion);//delete one question
    app.get("/question/", controller.getAllQuestions);//get all questions

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

    // WorkoutScR endpoints
    app.post("/WorkoutScR/", controller.insertWorkoutScR);  // insert one WorkoutScR
    app.get("/WorkoutScR/", controller.getAllWorkoutScR); // get all WorkoutScR
    app.put("/WorkoutScR/:id", controller.updateWorkoutScR); // update one WorkoutScR
    app.delete("/WorkoutScR/:id", controller.deleteWorkoutScR); // delete one WorkoutScR

    //Notice endpoints 
    app.post("/notice/", controller.insertNotice);  // insert one notice
    app.get("/notice/", controller.getAllNotices); // get all notices
    app.get("/notice/:id", controller.getOneNotice); // get one notice
    app.put("/notice/:id", controller.updateNotice); // update one notice
    app.delete("/notice/:id", controller.deleteNotice); // delete one notice
    
    // Workout endpoints
    app.post("/workout/", controller.insertWorkout);  // insert one workout
    app.get("/workout/", controller.getAllWorkouts); // get all workouts
    app.get("/workout/:id", controller.getOneWorkout); // get one workout
    app.put("/workout/:id", controller.updateWorkout); // update one workout
    app.delete("/workout/:id", controller.deleteWorkout); // delete one workout
    app.get("/workout/search/:search", controller.searchWorkouts); // search workouts
}
