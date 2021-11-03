import React from 'react';
import Input from './common/Input';
import Select from './common/Select';
import Textarea from './common/Textarea';
import Button from './common/Button';
import useLanguage from '../hooks/useLanguage';

interface ContactFormProps {
  sdaas?: boolean;
}

export default function ContactForm({ sdaas = false }: ContactFormProps) {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [service, setService] = React.useState<string>('');
  const [budget, setBudget] = React.useState<string>('');

  return (
    <form
      method="POST"
      action="https://formsubmit.co/info@avilatek.com"
      className="bg-light-blue dark:bg-dark-gray shadow-blue dark:shadow-dark-gray rounded-md p-7 max-w-md w-full lg:w-6/12 mx-auto md:mx-0 transition-all duration-300 ease-in-out"
    >
      <Input
        name="name"
        type="text"
        value={name}
        placeholder={translation(language, 'contactForm.name')}
        label={translation(language, 'contactForm.name')}
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
        required
        maxLength={127}
        pattern="^[a-zA-Z\u00C0-\u00FF]+\s?[a-zA-Z\u00C0-\u00FF]+$"
        title={translation(language, 'contactForm.error')}
      />
      <Input
        name="email"
        type="email"
        value={email}
        placeholder={translation(language, 'contactForm.email')}
        label={translation(language, 'contactForm.email')}
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
        required
        maxLength={127}
      />
      {!sdaas ? (
        <Select
          name="service"
          label={translation(language, 'contactForm.service')}
          value={service}
          onChange={(e) => {
            e.preventDefault();
            setService(e.target.value);
          }}
          required
        >
          <option value="" disabled>
            {translation(language, 'contactForm.chooseOption')}
          </option>
          <option value="consultoria">
            {translation(language, 'contactForm.consulting')}
          </option>
          <option value="marketing">Marketing</option>
          <option value="departamento de desarrollo">
            {translation(language, 'contactForm.department')}
          </option>
          <option value="digital funnel">Digital Funnel</option>
          <option value="digital store">Digital Store</option>
        </Select>
      ) : null}

      {!sdaas && service !== 'digital funnel' && service !== 'digital store' ? (
        <Select
          name="budget"
          label={translation(language, 'contactForm.budget')}
          value={budget}
          onChange={(e) => {
            e.preventDefault();
            setBudget(e.target.value);
          }}
          required
        >
          <option value="" disabled>
            {translation(language, 'contactForm.chooseOption')}
          </option>
          <option value="< $5.000">
            {translation(language, 'contactForm.lessThanFive')}
          </option>
          <option value="$5.000 - $10.000">$5.000 - $10.000</option>
          <option value="$10.000 - $20.000">$10.000 - $20.000</option>
          <option value="$30.000 - $50.000">$30.000 - $50.000</option>
          <option value="$50.000+">
            {translation(language, 'contactForm.moreThanFifty')}
          </option>
        </Select>
      ) : null}

      <Textarea
        name="message"
        value={message}
        placeholder={
          sdaas
            ? translation(language, 'contactForm.message2')
            : translation(language, 'contactForm.message')
        }
        label={
          sdaas
            ? translation(language, 'contactForm.message2')
            : translation(language, 'contactForm.message')
        }
        onChange={(e) => {
          e.preventDefault();
          setMessage(e.target.value);
        }}
        required
        rows={5}
        maxLength={1000}
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="¡Nuevo mensaje!" />
      <input
        type="hidden"
        name="_next"
        value={`https://avilatek.com/${
          language === 'es' ? '' : `${language}/`
        }successful-submission`}
      />
      <Button
        type="submit"
        aria-label="Enviar el formulario"
        className="w-full text-sm lg:text-base"
      >
        {translation(language, 'contactForm.send')}
      </Button>
    </form>
  );
}
