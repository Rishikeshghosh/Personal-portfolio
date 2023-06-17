import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@/componenets/Layout";
import AnimatedText from "@/componenets/AnimatedText";
import Transation from "@/componenets/Transation";
import Link from "next/link";

const Email = () => {
  const [alert, setAlert] = useState(false);
  const [alert1, setAlert2] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yadhhah",
        "template_j6icjyh",
        form.current,
        "lySBhQKhpLD9H42Tr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleSend = () => {
    if (
      userEmail.length &&
      name.length &&
      message.length > 5 &&
      userEmail &&
      name &&
      message !== ""
    ) {
      setAlert(true);
      setUserEmail("");
      setName("");
      setNumber("");
      setMessage("");
      setTimeout(() => {
        setAlert(false);
      }, 4000);
    } else {
      setAlert2(true);
      setTimeout(() => {
        setAlert2(false);
      }, 4000);
    }
  };

  return (
    <>
      {alert ? (
        <div
          id="alert-border-3"
          className="flex xs:p-2 xs:pl-9 mt-6  2xl:mx-[350px] xs:mx-0 xxs:mx-0 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
          role="alert"
        >
          <div className="2xl:ml-[11vw]  xs:text-lg text-2xl xs:ml-[1vw] 2xl:py-4 font-medium">
            Message has sent succesfully !{" "}
            <a
              href="#"
              className="font-semibold underline hover:no-underline"
            ></a>
          </div>
        </div>
      ) : null}
      {alert1 ? (
        <div
          id="alert-border-3"
          className="flex xs:p-2 xs:pl-9 mt-6  2xl:mx-[350px] xs:mx-0 xxs:mx-0 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
          role="alert"
        >
          <div className="2xl:ml-[14vw] xs:text-lg text-2xl xs:ml-[7vw]   2xl:py-4 font-medium">
            All fields are mandatory !{" "}
            <a
              href="#"
              className="font-semibold underline hover:no-underline"
            ></a>
          </div>
        </div>
      ) : null}
      <Transation />
      <section className="bg-white dark:bg-gray-900 mb-32 mt-10  xs:mb-4 xxs:mb-4">
        <div className="py-2    px-[430px] lg:py-16 xs:p-4 mx-auto max-w-screen-md mb-7 mt-1">
          <h2 className="mb-4  text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <p className="mb-8 pt-6 lg:mb-16 font-bold text-lg text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a great idea ? Want to share with me ? or want to get to know
            more about me and my projects? Feel free to let me know via email.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                for="subject"
                className="block mb-2 xs:text-xl text-lg  font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                type="text"
                id="subject"
                className="block xs:p-3 p-2 w-full xs:text-sm text-[1rem] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-white"
                placeholder="Enter your name"
                name="user_name"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 xs:text-xl text-[1rem]  font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number (Optional)
              </label>
              <input
                value={number}
                onChange={(event) => {
                  setNumber(event.target.value);
                }}
                type="number"
                id="number"
                className="block xs:p-3 p-2 w-full xs:text-sm text-[1rem] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 2xl:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 2xl:dark:focus:ring-blue-500 2xl:dark:focus:border-blue-500 dark:shadow-sm-white"
                placeholder="Enter your number"
                name="user_number"
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 xs:text-xl text-[1rem]   font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                value={userEmail}
                onChange={(event) => {
                  setUserEmail(event.target.value);
                }}
                type="email"
                id="email"
                className="shadow-sm xs:p-3 p-2 xs:text-sm text-[1rem] bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter your email"
                name="user_email"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2  xs:text-xl text-[1rem] font-medium text-gray-900 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                id="message"
                rows="4"
                className="block p-2 w-full xs:text-sm text-[1rem] text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="message"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <div className="">
              <input
                onClick={handleSend}
                type="submit"
                className=" xs:py-3 xs:px-5 xs:text-sm ml-[167px]  xs:ml-[88px] py-3 px-3 font-bold text-[1rem] text-center text-white rounded-lg bg-black sm:w-fit 2xl:hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 2xl:dark:bg-blue-600 2xl:dark:hover:bg-blue-700 2xl:dark:focus:ring-blue-800 "
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Email;
