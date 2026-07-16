const User = require("../models/User");
const bcrypt = require("bcryptjs");
exports.register = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            phone
        } = req.body;



        // Check existing user

        const existingUser = await User.findOne({
            where: {
                email
            }
        });


        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });

        }



        // Password hash

        const hashPassword = await bcrypt.hash(password, 10);



        // Create User

        const user = await User.create({

            name,
            email,
            password: hashPassword,
            phone

        });



        return res.status(201).json({

            success: true,
            message: "User registered successfully",

            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }

        });



    }
    catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,
            message: "Internal server error",
            error: error.message

        });

    }

};



// const login = async (req, res) => {

//     try {

//         res.json({
//             message: "Login API working"
//         });

//     }
//     catch (error) {

//         res.status(500).json({
//             message: error.message
//         });

//     }

// }



// module.exports = {
//     // register,
//     login
// };