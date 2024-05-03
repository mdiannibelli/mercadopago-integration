import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Mercado Pago
import {MercadoPagoConfig} from 'mercadopago';
import { Preference } from 'mercadopago';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const client = new MercadoPagoConfig({accessToken: process.env.ACCESS_TOKEN});

app.post('/create_preference', async(req,res) => {
    const body = {
        items: [
            {
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id: "ARS"
            }
        ],
        back_urls: {
            success: "http://localhost:5173",
            failure: "http://localhost:5173/error",
            pending: "http://localhost:5173"
        },
        auto_return: "approved",
    }
    try {
        //! Esto crea una preferencia con los datos de nuestro producto.
        //! Si sale bien nos devolverá el init_point que usaremos para redireccionar
        //! al usuario a la compra de Mercado Pago.
        const preference = await new Preference(client).create({body});
        res.json({redirectUrl: preference.init_point}) 
    } catch (error) {
        res.json(error);
    }
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})