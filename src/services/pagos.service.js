import { preferences } from "mercadopago";

export class PagoService {
    static async generarPreferenciaDePago(){
        // https://www.mercadopago.com.pe/developers/es/reference/preferences/_checkout_preferences/post
        try {
            
            await preferences.create({
                payer: {
                    name: 'Alan Cris', //obligatorio
                    "surname": 'Crisvall', //obligatorio
                    "address": {
                        zip_code: "04002",
                        street_name: 'Calle los platanitos',
                        street_number: '123'
                    },
                    email: "alanvcrisanto@gmail.com",
                    identification: '456789123',
                },
                items: [
                    {
                        id:"12345",
                        title: 'Polo Negro',
                        quantity: 1,
                        unit_price: 115.00,
                        currency_id: 'PEN',
                    }
                ],
                auto_return: "approved"
                
            })
        } catch (error) {
            console.log(error)
        }
        }
    }