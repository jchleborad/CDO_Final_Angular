// export class PageService {
//   constructor($resource) {
//     this.PageResource = $resource(
//       "http://localhost:49184/api/pages/:id",
//       null,
//       {
//         getPlanners: {
//           method: "GET",
//           url: "http://localhost:49184/api/pages/getPagesByCategory/:category",
//           isArray: true
//         }
//       }
//     );
//   }

//   getPagesByCategory(cat) {
//     return this.PageResource.getPlanners({ category: cat }).$promise;
//   }
// }
// angular.module("myApp").service("pageService", PageService);
