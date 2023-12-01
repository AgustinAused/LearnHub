import React, { useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
} from "@material-tailwind/react";
import zxcvbn from "zxcvbn";

import { useRouter } from "next/navigation";

export function FormSignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    celular: "",
    password_confirm: "",
    terms: false,
    image: null,
  });

  const [isChecked, setIsChecked] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [emailError, setEmailError] = useState("");
  const [celularError, setCelularError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("password", formData.password);
    form.append("celular", formData.celular);
    form.append("password_confirm", formData.password_confirm);
    form.append("terms", formData.terms);
    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      const response = await fetch("http://localhost:4050/api/users/registration", {
        method: "POST",
        body: form,
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        if (data.emailError) {
          setEmailError(data.emailError);
        }
        if (data.celularError) {
          setCelularError(data.celularError);
        }
        throw new Error("Error sending form data");
      } else {
        setEmailError("");
        setCelularError("");
        console.log("Registration successful");
        router.push("/sign-in");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }

    if (name === "celular" && !/^\d{10}$/.test(value)) {
      setCelularError("Invalid phone number");
    } else {
      setCelularError("");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setFormData({
      ...formData,
      terms: e.target.checked,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    const { score } = zxcvbn(value);
    setPasswordStrength(score);
  };

  return (
    <Card
      color="white"
      className="p-6 my-36 max-w-screen-lg sm:w-96"
      shadow={true}
    >
      <h2 className="text-2xl font-semibold mb-4">Registration</h2>
      <form className="mt-8 mb-2 w-80 ">
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            label="Name"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email"
          />
          {emailError && <div className="text-sm text-red-600 mt-1">{emailError}</div>}
        </div>
        <div className="mb-4">
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
            onKeyUp={handlePasswordChange}
          />
          {passwordStrength > 0 && (
            <div className="text-sm text-red-600 mt-1">
              Password strength:{" "}
              {
                ["Very weak", "Weak", "Reasonable", "Strong", "Very strong"][
                  passwordStrength - 1
                ]
              }
            </div>
          )}
          {formData.password.length > 0 && formData.password.length < 8 && (
            <div className="text-sm text-red-600 mt-1">
              Password must be at least 8 characters long.
            </div>
          )}
        </div>
        <div className="mb-4">
          <Input
            type="password"
            name="password_confirm"
            value={formData.password_confirm}
            onChange={handleChange}
            label="Confirm password"
            onKeyUp={handlePasswordChange}
          />
          {passwordStrength > 0 && (
            <div className="text-sm text-red-600 mt-1">
              Dificultad de la contraseña:{" "}
              {
                ["Muy débil", "Débil", "Razonable", "Fuerte", "Muy fuerte"][
                  passwordStrength - 1
                ]
              }
            </div>
          )}
          {formData.password.length > 0 && formData.password.length < 8 && (
            <div className="text-sm text-red-600 mt-1">
              La contraseña debe tener al menos 8 caracteres.
            </div>
          )}
        </div>
        <div className="mb-4">
          <Input
            type="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            label="Celular"
          />
          {celularError && <div className="text-sm text-red-600 mt-1">{celularError}</div>}
        </div>
        <div className="mb-4">
          <Input
            type="file"
            name="image"
            onChange={handleImageChange}
            label="User Image"
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
              <a
                href="/"
                className="font-medium transition-colors hover:text-gray-900"
              >
                Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <Button
          onClick={handleSubmit}
          className="mt-6"
          fullWidth
          disabled={!isChecked}
        >
          Registrarse
        </Button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        ¿Ya tienes una cuenta?{" "}
        <a href="/sign-in" className="font-medium text-gray-900">
          Ingresar
        </a>
      </p>
    </Card>
  );
          
        }