import controller from "../controllers";
import middleware from "../middleware";

export default function (app) {
	// Sample endpoints
	app.post("/sample/", controller.insertSample); // insert one sample
	app.get("/sample/", controller.getAllSamples); // get all samples
	app.get("/sample/:id", controller.getOneSample); // get one sample
	app.put("/sample/:id", controller.updateSample); // update one sample
	app.delete("/sample/:id", controller.deleteSample); // delete one sample
	app.get("/sample/search/:search", controller.searchSamples); // search samples

	// Workout Program endpoints
	app.post("/workoutProgram/", controller.insertWorkoutProgram); // insert one Workout Program
	app.get("/workoutProgram/", controller.getAllWorkoutPrograms); // get all Workout Programs
	app.get("/workoutProgram/:id", controller.getOneWorkoutProgram); // get one Workout Program
	app.put("/workoutProgram/:id", controller.updateWorkoutProgram); // update one Workout Program
	app.delete("/workoutProgram/:id", controller.deleteWorkoutProgram); // delete one wWrkout Program
	app.get("/workoutProgram/search/:search", controller.searchWorkoutPrograms); // search Workout Programs
	// getTotalRevenue
	app.get("/getAllWorkoutProgramsWithTotalRevenue/", controller.getAllWorkoutProgramsWithTotalRevenue);

	// Question endpoints
	app.post("/question/", controller.insertQuestion); //insert one question
	app.put("/question/:id", controller.updateQuestion); //update one question
	app.delete("/question/:id", controller.deleteQuestion); //delete one question
	app.get("/question/", controller.getAllQuestions); //get all questions
	app.get("/question/search/:search", controller.searchQuestions); // search questions
	//TrainerDB endpoints
	app.post("/blog/", controller.insertTrainerBD); // insert one sample
	app.get("/blog/", controller.getAllTrainerBD); // get all samples
	app.get("/blog/:id", controller.getOneTrainerBD); // get one sample
	app.put("/blog/:id", controller.updateTrainerBD); // update one sample
	app.delete("/blog/:id", controller.deleteTrainerBD); // delete one sample
	//app.get("/blog/search/:search", controller.searchTrainerDB); // search samples

	//PersonalTrainer Request endpoints
	app.post("/personal/", controller.insertPersonalTrainerReq); // insert one request
	app.get("/personal/", controller.getAllPersonalTrainerReq); // get all request
	app.get("/personal/:id", controller.getOnePersonalTrainerReq); // get one request
	app.put("/personal/:id", controller.updatePersonalTrainerReq); // update one request
	app.delete("/personal/:id", controller.deletePersonalTrainerReq); // delete one request
	app.get("/personal/search/:search", controller.searchPersonalTrainerReq); // search Workout Programs

	//Salary endpoints
	app.post("/salary/", controller.insertSalary); // insert a salary
	app.put("/salary/:id", controller.updateSalary); //update a salary
	app.get("/salary/", controller.getAllSalaries); // get all salaries
	app.get("/salary/:id", controller.getOneSalary); // get a salary
	app.get("/salary/search/:search", controller.searchSalaries); // search salaries

	// User endpoints
	app.get("/user/:id", controller.getUserDetails);
	app.post("/user/login/", controller.login);
	app.post("/user/register/", controller.createUser);
	app.get("/user/dashboard/", middleware.authenticate, controller.getAdminDashboard);
	app.delete("/user/:id", middleware.authenticate, controller.deleteUser);

	// Trainer endpoints
	app.post("/trainer/register/", controller.createTrainer);
	app.get("/trainer/:id", controller.getTrainer);
	app.get("/trainer/", controller.getTrainers);
	app.put("/trainer/:id", controller.updateTrainer);
	// app.get("/trainer/dashboard/", middleware.authenticate, controller.getAdminDashboard);

	// Enroll User to Workout Program
	app.post("/user/enroll/", controller.enrollUserToWorkoutProgram);
	// Unenroll User from Workout Program
	app.post("/user/unenroll/", controller.unenrollUserFromWorkoutProgram);
	// Get All Enrolled Workout Programs
	app.get("/user/enrolledWorkoutPrograms/:id", middleware.authenticate, controller.getAllEnrolledWorkoutPrograms);

	// Event endpoints
	app.get("/events/", controller.getEvents); // get all/sort/search event
	app.post("/events/", controller.createEvents); // insert one event
	app.get("/events/:id", controller.getEvent); // get one event
	app.put("/events/:id", controller.updateEvents); // update one event
	app.delete("/events/:id", controller.deleteEvents); // delete one event

	// WorkoutScR endpoints
	app.post("/WorkoutScR/", controller.insertWorkoutScR); // insert one WorkoutScR
	app.get("/WorkoutScRList/", controller.getAllWorkoutScR); // get all WorkoutScR
	app.put("/WorkoutScR/:id", controller.updateWorkoutScR); // update one WorkoutScR
	app.delete("/WorkoutScR/:id", controller.deleteWorkoutScR); // delete one WorkoutScR
	app.get("/WorkoutScR/:id", controller.getOneWorkoutScR); // Get One WorkoutScR

	//Notice endpoints
	app.post("/notice/", controller.insertNotice); // insert one notice
	app.get("/notice/", controller.getAllNotices); // get all notices
	app.get("/notice/:id", controller.getOneNotice); // get one notice
	app.put("/notice/:id", controller.updateNotice); // update one notice
	app.delete("/notice/:id", controller.deleteNotice); // delete one notice

	// Workout endpoints
	app.post("/workout/", controller.insertWorkout); // insert one workout
	app.get("/workout/", controller.getAllWorkouts); // get all workouts
	app.get("/workout/:id", controller.getOneWorkout); // get one workout
	app.put("/workout/:id", controller.updateWorkout); // update one workout
	app.delete("/workout/:id", controller.deleteWorkout); // delete one workout
	app.get("/workout/search/:search", controller.searchWorkouts); // search workouts
	app.get("/workouts/popular", controller.getMostPopularWorkouts); // get most popular workouts

	//Feedback endpoints
	app.post("/feedback/", controller.insertFeedback); // insert one feedback
	app.get("/feedback/", controller.getAllFeedbacks); // get all feedbacks
	app.put("/feedback/:id", controller.updateFeedback); // update one feedback

	// increse view count
	app.put("/workout/view/:id", controller.increaseViewCount);

	//add answer to question
	app.post("/question/answer/", controller.addAnswer); //insert one answer
}
