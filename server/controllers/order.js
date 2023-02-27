const Order = require('../models/order');
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const config = require("../config");


exports.createNewOrder = (req, res, next) => {

    const token = req.headers['token'];

    jwt.verify(token, config.secret, async (err, verifide) => {

        if (!verifide) return res.status(400).json({ error: 'User does nt exist' })
        if (err) return res.status(401).json({ error: err });

        if (!req.files) return res.status(400).send({ error: 'No files were uploaded.' });


        const ordersList = JSON.parse(req.body.data)
        const files = req.files.files;


        for (let i = 0; i < ordersList.length; i++) {
            const element = ordersList[i];

            const img = uuidv4() + '.png';

            if (i === 0) {

                finalDesign = files[i].name + img;
                originalImg = files[i + 1].name + img;

                await files[i].mv(__dirname + '/../data/' + finalDesign);
                await files[i + 1].mv(__dirname + '/../data/' + originalImg);

            } else {

                finalDesign = files[i * 2].name + img;
                originalImg = files[i * 2 + 1].name + img;

                await files[i * 2].mv(__dirname + '/../data/' + finalDesign);
                await files[i * 2 + 1].mv(__dirname + '/../data/' + originalImg);
            }


            const order = new Order({
                userId: verifide.sub,
                qty: element.qty,
                promocode: element.promocode,
                side: element.side,
                size: element.size,
                type: element.type,
                fabricColor: element.fabricColor,
                finalDesign,
                originalImg,
                originalImgLocation: element.originalImgLocation,
                orderStatus: "Pending"
            });

            order.save(err => {
                if (err) return next(err);
            });
        }

        res.json({ status: true, message: 'New order was created' })
    });
}

// Order.deleteMany({userId: "63f7958233149b1db4a904de"}, (err,a)=>console.log(a))