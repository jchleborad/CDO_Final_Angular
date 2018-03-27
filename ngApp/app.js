//WOZU FINAL PROJECT
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-bootstrap-npm';
import {UserService} from './services/UserService';
import {
  HomeController, 
  AboutController, 
  PlannerController, 
  ExerciseController, 
  LifestyleController,
  LandingController, 
  TemplateController,
  ImageController,
  GradeController,
  LoginController,
  RegisterController,} from './controllers/controllers';

    angular.module('myApp', [uirouter, ngResource, uiBootstrap]).service('UserService', UserService).config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function routing($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
          .state("home", {
            url: "/",
            templateUrl: "/ngApp/views/home.html",
            controller: HomeController,
            controllerAs: "controller"
          })
          .state("about", {
            url: "/about",
            templateUrl: "/ngApp/views/about.html",
            controller: AboutController,
            controllerAs: "controller"
          })
          .state("planners", {
            url: "/planners",
            templateUrl: "/ngApp/views/planners.html",
            controller: PlannerController,
            controllerAs: "controller"
          })
          .state("exercise", {
            url: "/exercise",
            templateUrl: "/ngApp/views/exercise.html",
            controller: ExerciseController,
            controllerAs: "controller"
          })
          .state("lifestyle", {
            url: "/lifestyle",
            templateUrl: "/ngApp/views/lifestyle.html",
            controller: LifestyleController,
            controllerAs: "controller"
          })
          .state("templates", {
            url: "/templates",
            templateUrl: "/ngApp/views/templates.html",
            controller: TemplateController,
            controllerAs: "controller"
          })
          .state("login", {
            url: "/login",
            templateUrl: "/ngApp/views/login.html",
            controller: LoginController,
            controllerAs: "controller"
          })
          .state("register", {
            url: "/register",
            templateUrl: "/ngApp/views/register.html",
            controller: RegisterController,
            controllerAs: "controller"
          })
          .state("main", {
            url: "/main",
            templateUrl: "/ngApp/views/main.html",
            controller: HomeController,
            controllerAs: "controller"
          })
          .state("grade", {
            url: "/grade",
            templateUrl: "/ngApp/views/grade.html",
            controller: GradeController,
            controllerAs: "controller"
          })
          .state("notFound", {
            url: "/notFound",
            templateUrl: "/ngApp/views/notFound.html"
          });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    }
