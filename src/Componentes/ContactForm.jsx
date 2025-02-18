import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvgzdpbl");
  if (state.succeeded) {
    return <p>Mensaje enviado!</p>;
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label htmlFor="Nombre"></label>
            <input class="form-control" type="text" name="Nombre" placeholder="Tu nombre " required />
        </div>
        <div class="form-group">
            <label htmlFor="email"></label>
            <input class="form-control" id="email" type="email" name="email" placeholder="Mail" required/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
        </div>
        <div class="form-group">
            <label htmlFor="message"></label>
            <textarea class="form-control" id="message" name="message" rows="7" required placeholder="Ingrese su mensaje"/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
        </div>
        <div class="form-group">
            <button type="submit" disabled={state.submitting} class="form-control btn btn-primary">Enviar mensaje</button>
        </div>
    </form>
  );
}