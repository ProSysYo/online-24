import { Router } from 'express'
import config from 'config'
import { check, validationResult } from 'express-validator';
//import authMiddleware from '../middleware/auth.middleware.js'

import Customer from '../models/Customer.js'

const router = Router()

router.post('/create',
[
    check('code', 'Некоректный код закачика').notEmpty(),
    check('name', 'Имя заказчика не должно быть пустым').notEmpty(),
    check('adress', 'Адрес заказчка не должно быть пустым').notEmpty(),
    check('phone', 'Вы не ввели номер телефона').notEmpty(),
    check('email', 'Некорректный email').isEmail(),    
], 
async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(), 
                message: 'Некоректные данные при создании заказчика'
            })
        }

        const { code, name, adress, phone, email } = req.body;

        const findCustomer = await Customer.findOne( {code} );

        if (findCustomer) {
            return res.status(400).json({ message: 'Код с таким закачиком уже существует' });
        }

        const customer =  new Customer({ code, name, adress, phone, email });

        await customer.save();

        res.status(201).json({ customer, message: 'Заказчик создан!' });

    } catch (e) {
        res.status(500).json({ message: 'Что то пошло не так...' });
        console.log(e);
    }
})

router.get('',
async (req, res) => {
    try {
        const customers = await Customer.find()        
        return res.status(201).json(customers)
    } catch (e) {        
        res.status(500).json({ message: 'Что то пошло не так...' })
    }
})

export default router;