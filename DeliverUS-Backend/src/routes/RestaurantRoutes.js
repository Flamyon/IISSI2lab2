import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  app.route('/restaurants')
    .get(RestaurantController.index) // the function that will attend requests for that http verb and that path
    .post(RestaurantController.create) // the function that will attend requests for that http verb and that path

  app.route('/restaurants/:restaurantsid')
    .get(RestaurantController.index)
    .post(RestaurantController.create)
    .delete(RestaurantController.destroy)
}
export default loadFileRoutes
