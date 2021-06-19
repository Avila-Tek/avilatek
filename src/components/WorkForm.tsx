import React from 'react';
import Input from './common/Input';
import FileInput from './common/FileInput';
import Button from './common/Button';
import useLanguage from '../hooks/useLanguage';

export default function ContactForm() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = 'es';
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [fileName, setFileName] = React.useState<string>('');
  const [disabled, setDisabled] = React.useState(false);

  return (
    <form
      method="POST"
      action="https://formsubmit.co/rrhh@avilatek.dev"
      encType="multipart/form-data"
      className="bg-light-blue dark:bg-dark-gray shadow-blue dark:shadow-dark-gray rounded-md p-8 max-w-md w-full lg:w-6/12 mx-auto md:mx-0 transition-all duration-300 ease-in-out"
    >
      <Input
        name="name"
        type="text"
        value={name}
        placeholder={translation(language, 'workWithUs.name')}
        label={translation(language, 'workWithUs.name')}
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
        required
        maxLength={127}
        pattern="^[a-zA-Z\u00C0-\u00FF]+\s?[a-zA-Z\u00C0-\u00FF]+$"
        title={translation(language, 'workWithUs.error')}
      />
      <Input
        name="email"
        type="email"
        value={email}
        placeholder={translation(language, 'workWithUs.email')}
        label={translation(language, 'workWithUs.email')}
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
        required
        maxLength={127}
      />
      <FileInput
        name="cv"
        label={translation(language, 'workWithUs.cv')}
        accept="application/pdf"
        fileName={fileName}
        onChange={(e) => {
          e.preventDefault();
          if (e.target.files[0].type === 'application/pdf') {
            setFileName(e.target.files[0].name);
            setDisabled(false);
          } else {
            setFileName(translation(language, 'workWithUs.wrongFile'));
            setDisabled(true);
          }
        }}
        required
      />

      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="¡Nuevo mensaje!" />
      <input
        type="hidden"
        name="_next"
        value={`https://avilatek.dev/${
          language === 'es' ? '' : language + '/'
        }successful-submission`}
      />
      <Button
        type="submit"
        aria-label="Enviar el formulario"
        className="w-full text-sm lg:text-base mt-6"
        disabled={disabled}
      >
        {translation(language, 'workWithUs.apply')}
      </Button>
    </form>
  );
}
