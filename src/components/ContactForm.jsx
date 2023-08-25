import { Formik, Form, Field, ErrorMessage } from 'formik';


export const ContactForm  = ( {onAdd}) =>{

    return <>
        <div>
        <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, action) => {
        onAdd(values);
        action.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Jane" />

        <label htmlFor="number">Number</label>
        <Field id="number" 
            name="number"   
            type="tel"
            placeholder="555-55-55"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
         />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
         
        </div>
       </>

  
}