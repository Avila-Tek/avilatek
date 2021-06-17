import React from 'react';
import Input from './common/Input';
import Button from './common/Button';
import UploadIcon from './icons/UploadIcon';

export default function ContactForm() {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');

  return (
    <form
      method="POST"
      action="https://formsubmit.co/erika@avilatek.dev"
      className="bg-light-blue dark:bg-dark-gray shadow-blue dark:shadow-dark-gray rounded-md p-8 max-w-md w-full lg:w-6/12 mx-auto md:mx-0 transition-all duration-300 ease-in-out"
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
      />

      <div className="w-full">
        <span className="text-sm lg:text-base text-primary-500 dark:text-primary-400 font-bold">
          Adjunte su CV
        </span>
        <div className="mt-2 border border-dark-blue dark:border-medium-gray border-dashed w-full p-7 rounded-md">
          <div className="w-full m-auto text-center">
            <UploadIcon className="w-14 text-medium-blue dark:text-medium-gray mx-auto mb-3" />
            <p className="text-xs xl:text-sm text-neutral-500 dark:text-neutral-400">
              Arrastre el PDF hasta acá, o haga click para seleccionarlo
            </p>
          </div>
        </div>
      </div>

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
        className="w-full text-sm lg:text-base mt-6"
      >
        Aplicar
      </Button>
    </form>
  );
}
