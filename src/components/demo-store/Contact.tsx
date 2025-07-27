"use client";
import { useForm } from "@formspree/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ButtonDemoStore } from "../ui/ButtonDemoStore";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const InputGroup = ({ label, children, name }: { label: string, children: React.ReactNode, name: string }) => {
  return (
    <div className="space-y-2 tracking-wide 3xl:space-y-3 ">
      <label htmlFor={name} className="font-24px font-semibold text-[#15234E]">
        {label}
      </label>

      {children}
    </div>
  );
};
const Contact = () => {
  const [state, handleSubmit] = useForm("mldjrdqz");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      console.log("state.succeeded", state.succeeded);

      navigate("/thank-you");
    }
  }, [navigate, state.succeeded]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 lg:gap-7 3xl:gap-10">
        <div className="grid w-full gap-x-4 gap-y-6 md:grid-cols-2 3xl:gap-10">
          <InputGroup name="name" label={"Full Name*"}>
            <Input
              type="text"
              name="name"
              required
              className="border-[#DEE3E9]"
            />
          </InputGroup>

          <InputGroup name="company" label={"Your Company*"}>
            <Input
              type="text"
              name="company"
              required
              className="border-[#DEE3E9]"
            />
          </InputGroup>

          <InputGroup name="email" label={"Email*"}>
            <Input
              type="text"
              name="email"
              required
              className="border-[#DEE3E9]"
            />
          </InputGroup>

          <InputGroup name="phone" label={"Phone*"}>
            <Input
              type="text"
              name="phone"
              required
              className="border-[#DEE3E9]"
            />
          </InputGroup>
        </div>

        <InputGroup name="message" label={"Send Us a Message (Optional)"}>
          <Textarea
            name="message"
            className="rounded-[24px] border-[#DEE3E9]"
          />
        </InputGroup>

        <ButtonDemoStore
          size="lg"
          disabled={state.submitting}
          className=" md:ml-auto w-fit px-9"
          variant="default"
        >
          {state.submitting && (
            <div className=" absolute left-0 ml-5 size-3 rounded-[50%] group-hover:border-white group-hover:border-t-[#ffffff85] lg:ml-3 lg:size-4 3xl:ml-4 3xl:size-[18px]" />
          )}
          Submit
        </ButtonDemoStore>
      </div>
    </form>
  );
};

export default Contact;
