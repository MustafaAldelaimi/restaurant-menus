const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });

    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const restaurant1 = await Restaurant.create(seedRestaurant[0])
        expect(restaurant1).toBeInstanceOf(Restaurant)
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const menu1 = await Menu.create(seedMenu[0])
        expect(menu1).toBeInstanceOf(Menu)
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        
        const restaurantFound = await Restaurant.findOne()
        expect(restaurantFound).toBeInstanceOf(Restaurant)
    });

    test('can find Menus', async () => {
        // TODO - write test
        const menuFound = await Menu.findOne()
        expect(menuFound).toBeInstanceOf(Menu)
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        
        const restaurant2 = await Restaurant.create(seedRestaurant[1])
        let restaurantLength = await Restaurant.findAll()
        expect(restaurantLength.length).toBe(2)
        restaurant2.destroy()
        restaurantLength = await Restaurant.findAll()
        expect(restaurantLength.length).toBe(1)
    });

    test('can delete Menus', async () => {
        // TODO - write test

        const menu2 = await Menu.create(seedMenu[1])
        let menuLength = await Menu.findAll()
        expect(menuLength.length).toBe(2)
        menu2.destroy()
        menuLength = await Menu.findAll()
        expect(menuLength.length).toBe(1)
    });
})