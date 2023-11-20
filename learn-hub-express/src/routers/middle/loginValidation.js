const {body, validationResult} = require("express-validator");

const loginValidations = [
    body("email").isEmail().withMessage("Debe ingresar un email valido"),
    body("password")
        .isLength({min: 3})
        
        .withMessage(
            "La clave debe tener más de 3 caracteres, una mayúscula y una minúscula"
        ),
];

const handleLoginValidationResults = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Si hay errores, puedes manejarlos de la manera que desees
        // Por ejemplo, podrías enviarlos como respuesta al cliente
        return res.status(422).json({errors: errors.array()});
    }

    // Si no hay errores, puedes continuar con el siguiente middleware o ruta
    next();
};


module.exports = {
    loginValidations,
    handleLoginValidationResults
}