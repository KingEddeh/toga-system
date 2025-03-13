import React from 'react';
import { useForm } from 'react-hook-form';

export default function CustomerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" {...register("First Name", {required: true})} />
      <input type="text" placeholder="Middle Name" {...register("Middle Name", {required: true})} />
      <input type="text" placeholder="Last Name" {...register("Last Name", {required: true, maxLength: 200})} />
      <input type="text" placeholder="Suffix" {...register} />
      <input type="text" placeholder="Phone Number" {...register} />
      <input type="email" placeholder="Email Address" {...register} />
      <select {...register("Gender", { required: true })}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input type="submit" />
    </form>
  );
}