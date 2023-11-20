const { body, validationResult } = require("express-validator");

const registervalidations = [
    body("name")
      .isLength({ min: 4 })
      .withMessage("Debe ingresar un Nombre completo"),
    body("email").isEmail().withMessage("Debe ingresar un email valido"),
    body("password")
      .isLength({ min: 3 })
      .withMessage(
        "La clave debe tener más de 3 caracteres, una mayúscula y una minúscula"
      ),
    body("password_confirm").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
    body("terms").notEmpty().withMessage("terms must be acepted"),
  ];
  
  const handleRegisterValidationResults = (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      // Si hay errores, puedes manejarlos de la manera que desees
      // Por ejemplo, podrías enviarlos como respuesta al cliente
      return res.status(422).json({ errors: errors.array() });
    }
  
    // Si no hay errores, puedes continuar con el siguiente middleware o ruta
    next();
  };

    module.exports = {
        registervalidations,
        handleRegisterValidationResults
    }