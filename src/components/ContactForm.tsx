import React from 'react';
import Input from './ui/Input';
import Select from './ui/Select';
import Textarea from './ui/Textarea';
import Button from './ui/Button';

export default function ContactForm() {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [service, setService] = React.useState<string>('');
  const [budget, setBudget] = React.useState<string>('');

  return (
    <form
      method="POST"
      action="https://formsubmit.co/info@avilatek.dev"
      className="bg-light-blue dark:bg-dark-gray shadow-blue dark:shadow-dark-gray rounded-md p-7 max-w-md w-full lg:w-6/12 mx-auto md:mx-0 transition-all duration-300 ease-in-out"
    >
      <Input
        name="name"
        type="text"
        value={name}
        placeholder="Nombre"
        label="Nombre"
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
        required
        maxLength={127}
        pattern="^[a-zA-Z\u00C0-\u00FF]+\s?[a-zA-Z\u00C0-\u00FF]+$"
        title="No se admiten carácteres especiales"
        onKeyPress={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
      />
      <Input
        name="email"
        type="email"
        value={email}
        placeholder="Correo"
        label="Correo electrónico"
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
        required
        maxLength={127}
        onKeyPress={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
      />
      <Select
        name="service"
        label="Servicio que desea"
        value={service}
        onChange={(e) => {
          e.preventDefault();
          setService(e.target.value);
        }}
        required
      >
        <option value="" disabled>
          Seleccione una opción
        </option>
        <option value="consultoria">Consultoría</option>
        <option value="marketing">Marketing</option>
        <option value="departamento de desarrollo">
          Departamento de desarrollo
        </option>
      </Select>
      <Select
        name="budget"
        label="¿Cuál es su presupuesto?"
        value={budget}
        onChange={(e) => {
          e.preventDefault();
          setBudget(e.target.value);
        }}
        required
      >
        <option value="" disabled>
          Seleccione una opción
        </option>
        <option value="< $5.000">Menos de $5.000</option>
        <option value="$5.000 - $10.000">$5.000 - $10.000</option>
        <option value="$10.000 - $20.000">$10.000 - $20.000</option>
        <option value="$30.000 - $50.000">$30.000 - $50.000</option>
        <option value="$50.000+">Más $50.000</option>
      </Select>

      <Textarea
        name="message"
        value={message}
        placeholder="Mensaje"
        label="Describa su proyecto o duda"
        onChange={(e) => {
          e.preventDefault();
          setMessage(e.target.value);
        }}
        required
        rows={5}
        maxLength={1000}
        onKeyPress={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="¡Nuevo mensaje!" />
      <input
        type="hidden"
        name="_next"
        value="https://avilatek.dev/successful-submission"
      />
      <Button
        type="submit"
        aria-label="Enviar el formulario"
        className="w-full text-sm lg:text-base"
      >
        Contactar
      </Button>
    </form>
  );
}
