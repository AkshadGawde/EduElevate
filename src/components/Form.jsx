import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form has been submitted");
    reset();
  };

  return (
    <div id="form" className="formContainer">
      <span className="inputHeader">Contact Us!</span>
      <form onSubmit={handleSubmit(onSubmit)} id="myForm">
        <label>Name</label>
        <input
          {...register("from_name", { required: true, maxLength: 30 })}
          type="text"
          placeholder="Full Name"
        />

        <label>E-mail</label>
        <input
          {...register("user_email", {
            required: true,
            pattern: /[a-z A-Z 0-9]@[a-z A-Z 0-9].[a-z]{2,}/,
          })}
          type="email"
          placeholder="example@example.com"
        />

        <label>
          Contact Number <span style={{ color: "red" }}>*</span>
        </label>
        <input
          {...register("contact_number", { required: true })}
          type="text"
          placeholder="Enter your contact number"
        />

        <label>Further queries</label>
        <textarea
          {...register("message")}
          placeholder="Enter your message here"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
