import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Box, Heading, Input, Stack, Button, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../main";

const Checkout = () => {
  const [user, setUser] = useState({
    nombre: "",
    telefono: "",
    email: "",
    repetirEmail: "",
  });
  const [emailMatch, setEmailMatch] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const { cart, getTotal } = useContext(CartContext);

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const validateEmail = () => {
    if (user.email === user.repetirEmail) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
  }

  const validateForm = () => {
    const errors = {};
    if (!user.nombre) {
      errors.name = "Por favor ingresá tu nombre";
    }
    if (!user.telefono) {
      errors.telefono = "Por favor ingresá un número teléfono";
    }
    if (!user.email) {
      errors.email = "Por favor ingresá tu dirección de email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
        errors.email = 'Email invalido.';
    }
    if (!user.repetirEmail) {
      errors.repetirEmail = "Por favor repetí tu dirección de email";
    } else if (user.email != user.repetirEmail) {
        errors.repetirEmail = 'Los emails no coinciden';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getOrder = () => {
    const isFormValid = validateForm()
    validateEmail()
    if (isFormValid && emailMatch) {
      const order = {
        buyer: user,
        items: cart,
        total: getTotal(),
      };
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => {
        document.querySelector("#alert").style.display="block";
        document.querySelector("#order-number").textContent = `¡Gracias por tu compra! Tu orden fue generada con el código: ${id}`;
      })
    }
  };

  return (
    <>
      <Box>
        <Heading align="center" mt="4">
          Resumen de compra
        </Heading>
        <Heading align="center" mt="2" mb="2" as="h3" size="md">
          ${getTotal()}
        </Heading>

        <Box id="alert" display='none' mb="4">
          <Alert m="auto" maxW={{ base: "xs", md: "sm", lg: "md" }} status="success" variant="left-accent" >
            <AlertIcon />
            <Text id="order-number"></Text>
          </Alert>
        </Box>

        <form>
          <Stack m="auto" maxW={{ base: "xs", md: "sm", lg: "md" }} spacing={3}>
            <Input
              onChange={updateUser}
              name="nombre"
              placeholder="Nombre"
              size="lg"
            />
            {formErrors.name && <Text color="red.500">{formErrors.name}</Text>}
            <Input
              onChange={updateUser}
              name="telefono"
              placeholder="Teléfono"
              size="lg"
            />
            {formErrors.telefono && (
              <Text color="red.500">{formErrors.telefono}</Text>
            )}
            <Input
              onChange={updateUser}
              name="email"
              placeholder="Email"
              size="lg"
            />
            {formErrors.email && (
              <Text color="red.500">{formErrors.email}</Text>
            )}
            <Input
              onChange={updateUser}
              name="repetirEmail"
              placeholder="Repetir email"
              size="lg"
            />
            {formErrors.repetirEmail && (
              <Text color="red.500">{formErrors.repetirEmail}</Text>
            )}
            <Button onClick={getOrder}>Comprar</Button>
          </Stack>
        </form>

      </Box>
    </>
  );
};

export default Checkout;
