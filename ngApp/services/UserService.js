export class UserService {
         constructor($resource) {
           this.userResource = $resource("http://localhost:49184/api/Users/:action", {}, { 
             delete: { method: "DELETE", headers: { "Content-Type": "application/json" }, hasBody: true },
             getUser: { method: "GET", url: "http://localhost:49184/api/Users/getUser", isArray: false} 
            });

           this.user = null;
         }

         register(user) {
           return this.userResource.save({ action: "register" }, user).$promise;
         }

         login(user) {
           return this.userResource.save({ action: "login" }, user).$promise;
         }

         getLoggedInUser() {
           return this.userResource.getUser().$promise;
         }
       }

