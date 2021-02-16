import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';
import User from '../models/User.js';
import authMiddleware from '../middleware/auth.middleware.js'

const router = Router();

router.post('/register', 
[
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
], 
async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(), 
                message: 'Некоректные данные при регистрации'
            })
        }

        const { email, password } = req.body;

        const findUser = await User.findOne( {email} );
        if (findUser) {
            return res.status(400).json({ message: 'Такой пользователь уже существет' });
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const user =  new User({
            email,
            password: hashPassword
        });

        await user.save();

        res.status(201).json({ message: 'Пользователь создан!' });

    } catch (e) {
        res.status(500).json({ message: 'Что то пошло не так...' });
    }
});

router.post('/login', 
[
    check('email', 'Некоректный email').isEmail(),
    check('password', 'Введите пароль').exists()
],
async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        
        if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' });
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('secret'),
            { expiresIn: '1h' }
        )

        return res.json({
            token, 
            user: {
                id: user.id,
                email: user.email,
            }        
        })
    } catch (e) {
        res.status(500).json({ message: 'Что то пошло не так...' });
    }
})

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            
            const user = await User.findOne({_id: req.user.userId})
            
            const token = jwt.sign({userId: user.id}, config.get("secret"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,                    
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

export default router;