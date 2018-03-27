import {
  prop
} from "angular-ui-router";

export class HomeController {
  constructor($resource) {
    this.username = localStorage.getItem("username"); //add to controller for page to display on
    this.HomeResource = $resource("http://localhost:49184/api/pages/:id");
    this.planners = this.HomeResource.query();
    this.planners = "test";
  }
}

export class AboutController {
  constructor() {
    this.message = 'My About Page';
  }
}

export class PlannerController {

  constructor($resource) {
    this.PageResource = $resource(
      "http://localhost:49184/api/pages/:id",
      null, {
        getPlanners: {
          method: "GET",
          url: "http://localhost:49184/api/pages/getPagesByCategory/:category",
          isArray: true
        }
      }
    );
    this.planners = [];
    this.getPagesByCategory("Planner").then((result) => {
      this.planners = result;
    });

  }

  getPagesByCategory(cat) {
    return this.PageResource.getPlanners({
      category: cat
    }).$promise;
  }
}

export class ExerciseController {
  constructor($resource) {
    this.PageResource = $resource(
      "http://localhost:49184/api/pages/:id",
      null, {
        getExercise: {
          method: "GET",
          url: "http://localhost:49184/api/pages/getPagesByCategory/:category",
          isArray: true
        }
      }
    );
    this.exercise = [];
    this.getPagesByCategory("Exercise").then((result) => {
      this.exercise = result;
    });

  }

  getPagesByCategory(cat) {
    return this.PageResource.getExercise({
      category: cat
    }).$promise;
  }
}

export class LifestyleController {
  constructor($resource) {
    this.PageResource = $resource(
      "http://localhost:49184/api/pages/:id",
      null, {
        getLifestyle: {
          method: "GET",
          url: "http://localhost:49184/api/pages/getPagesByCategory/:category",
          isArray: true
        }
      }
    );
    this.lifestyle = [];
    this.getPagesByCategory("Lifestyle").then((result) => {
      this.lifestyle = result;
    });

  }

  getPagesByCategory(cat) {
    return this.PageResource.getLifestyle({
      category: cat
    }).$promise;
  }
}

export class TemplateController {

  constructor($resource) {
    this.PageResource = $resource(
      "http://localhost:49184/api/pages/:id",
      null, {
        getTemplates: {
          method: "GET",
          url: "http://localhost:49184/api/pages/getPagesByCategory/:category",
          isArray: true
        }
      }
    );
    this.templates = [];
    this.getPagesByCategory("Template").then((result) => {
      this.templates = result;
    });

  }

  getPagesByCategory(cat) {
    return this.PageResource.getTemplates({
      category: cat
    }).$promise;
  }
}

export class LoginController {
  constructor(UserService, $state) {
    this.UserService = UserService;
    this.$state = $state;
    this.error = "";
  }
  login() {
    this.UserService.login({
        username: this.username,
        password: this.password
      })
      .then((data) => {
        this.UserService.user = data;
        this.user = this.UserService.user;
        localStorage.setItem("username", this.username);
        console.log(this.username + " is Logged In this.username");
        console.log(this.user + " this.user");
        console.log(this.user.username + " this.user.username");

        this.$state.go("main")
      })
      .catch((err) => {
        this.error = err.data;
        console.log(err);
      });
  }
}

export class RegisterController {
  constructor(UserService, $state) {
    this.UserService = UserService;
    this.$state = $state;
  }
  register() {
    this.UserService.register({
        username: this.username,
        password: this.password
      })
      .then((data) => {
        this.registerConf = data;
        console.log(this.username + " is Registered");
        this.$state.go("login");
      });
  }
}
RegisterController.$inject = ["UserService", "$state"];

