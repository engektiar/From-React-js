import React from 'react'
import { Container } from 'react-bootstrap'
import { useForm } from "react-hook-form";
const Eastway = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div> 
    <Container>
    <h2 className='text-center'>React form validation Using Usefrom Hooks </h2>
    <div className='frommain'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" name="name" placeholder="enter your name"
    {...register("name", { required:true })} 
    className={errors.name ? "from-control is-invalid" : "from control"}
    />
    {
      errors.name && <p>Please input your name</p>
    }

   
    <input type="passwoed"   placeholder='password'   
    {...register("password", { required:true,minLength:8 })} 
    />

    {
      errors.password && <p>invalid password </p>
    }
    <input type="submit" />
  </form>
    </div>
    </Container>
    
    </div>
  )
}

export default Eastway