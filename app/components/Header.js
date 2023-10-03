"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import exprologo from "/public/assets/exprologo.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//add
const Header = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    setError: setError1,
    reset: reset1,
    formState: { errors: errors1 },
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setError: setError2,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm();
  const key = "6LfUGlEoAAAAAP2tPa9Z4AWCs5_7N-KlwsMOB3uF";
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isMailVerificationModal, setIsMailVerificationModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  //header scroll
  // const [isSticky, setIsSticky] = useState(false);
  // const headerRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (headerRef.current && headerRef.current.getBoundingClientRect) {
  //       const headerRect = headerRef.current.getBoundingClientRect();
  //       setIsSticky(headerRect.top <= 0); // Adjust this value if you want to add some spacing
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Register Validations and values
  const [regCaptcha, setRegcaptcha] = useState(null);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userNameErrMsg, setUsernameErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");

  //login validations and values
  const [captchaValue, setCaptchaValue] = useState(null);

  const openSignInModal = () => {
    console.log("Register modal closed");
    // setIsRegisterModalOpen(false);
    setIsSignInModalOpen(true);
  };

  const openRegisterModal = () => {
    console.log("Register modal Opened");
    // setIsSignInModalOpen(false);
    setIsRegisterModalOpen(() => !isRegisterModalOpen);
  };

  const signInHandler = () => {
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(true);
    setIsForgotModalOpen(false);
  };
  const RegisterHandler = () => {
    setIsRegisterModalOpen(true);
    setIsSignInModalOpen(false);
    setIsForgotModalOpen(false);
  };
  const ForgotHandler = () => {
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(false);
    setIsForgotModalOpen(true);
  };
  const closeModals = () => {
    setIsSignInModalOpen(false);
    setIsRegisterModalOpen(false);
  };
  const handleRegisterCloseModal = () => {
    setIsRegisterModalOpen(false);
  };
  const handleSignInCloseModal = () => {
    setIsSignInModalOpen(false);
  };
  const handleForgotCloseModal = () => {
    setIsForgotModalOpen(false);
  };
  const handleVerifyotpModal = () => {
    setIsMailVerificationModal(false);
  };
  const signIncaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log(value);
  };
  const signUpcaptchaChange = (value) => {
    setRegcaptcha(value);
  };
  const handleEmailChecking = (value) => {
    const blockedEmails = [
      "facebook.com",
      "twitter.com",
      "instagram.com",
      "linkedin.com",
      "gmail.com",
    ];
    return !blockedEmails.some((domain) => value.includes(domain));
  };
  //
  const handleSubmitSignUp = async (data) => {
    // setIsRegisterModalOpen(false);
    // setIsMailVerificationModal(true);
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/",
    };
    if (!regCaptcha) {
      setError("regCaptcha", {
        type: "manual",
        message: "Please complete the CAPTCHA",
      });
      return;
    }
    const options = {
      headers: headers,
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
    };

    await fetch("https://expros.com/signup.php", options)
      .then((res) => {
        console.log(res);
        if (res.ok === true)
          toast("Registration Successfull Please signin", {
            type: "success",
            autoClose: 2000,
          });
        setTimeout(() => {
          setIsRegisterModalOpen(false);
          setIsSignInModalOpen(true);
        }, 1000);
      })
      .catch((e) => console.log(e));
  };

  //submitting login form functions
  const handleSignInSubmit = async (data) => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "https://expros-6s2znff60-expros-projects-9473ea27.vercel.app/",
    };
    const options = {
      headers: headers,
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
    };
    if (!captchaValue) {
      setError1("captcha", {
        type: "manual",
        message: "Please complete the CAPTCHA",
      });
      return;
    }
    await fetch("https://expros.com/signin.php", options)
      .then((res) => {
        console.log(res);
        if (res.ok === true)
          toast("Sign In Successfull", { type: "success", autoClose: 3000 });
        setIsSignInModalOpen(false);
      })
      .catch((e) => console.log(e));
    reset();
  };

  //submitting forgot password email form
  const handleSubmitforgotPassword = (data) => {
    console.log(data);
  };

  const styleRegister = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    // height: "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 5,
    // p: 4,
  };
  const styleLogin = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    // height: "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 5,
    // p: 4,
  };
  const otpverifystyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    // height: "75%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 5,
  };
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.1 },
  };
  return (
    <div>
      <ToastContainer />
      <nav className="container m-auto flex justify-between mt-[10px] pb-[10px] bg-[white] sticky top-0 z-[1]">
        <Link href="/">
          <Image
            src={exprologo}
            alt="logo"
            width={170}
            height={170}
            className="ml-[42px]"
          />
        </Link>
        <div className="flex flex-col">
          <ul className="flex items-center self-end h-[36px] bg-gradient-to-r from-[#082857] to-[#3b7fb9]">
            <li className="border-r-[23px] border-t-[40px] border-r-transparent border-t-[#fff] cursor-pointer"></li>
            <li
              className="text-white text-[18px] pl-[14px] pr-[14px] cursor-pointer border-r-[1.5px] border-solid border-[#fff] h-[100%] pt-[5px]"
              onClick={openSignInModal}
            >
              Sign In
            </li>
            <li
              className="text-white text-[18px] pl-[14px] pr-[14px] cursor-pointer border-r-[1.5px] border-solid border-[#fff] h-[100%] pt-[5px]"
              onClick={openRegisterModal}
            >
              Sign Up
            </li>
            <li className="text-white text-[18px] pl-[14px] pr-[14px] cursor-pointer border-r-[1.5px] border-solid border-[#fff] h-[100%] pt-[5px]">
              Logout
            </li>
          </ul>
          <ul className="flex w-auto pt-[10px]">
            <Link href="/profile">
              <li className="pl-[15px] cursor-pointer">Home</li>
            </Link>
            <li className="pl-[15px] cursor-pointer">About</li>
            <li className="pl-[15px] cursor-pointer group inline-block relative">
              <p>Reading Room</p>
              <div className="hidden absolute z-[1] group-hover:block w-[200px] bg-[black] p-[10px] rounded-md">
                <p className="text-[white]">Upload an Article</p>
              </div>
            </li>
            <li className="pl-[15px] cursor-pointer group inline-block relative">
              <p>Events</p>
              <div className="hidden absolute z-[1] group-hover:block w-[150px] bg-[black] p-[10px] rounded-md">
                <p className="text-[white]">List an event</p>
              </div>
            </li>
            <li className="pl-[15px] cursor-pointer group inline-block relative">
              <p>Journals</p>
              <div className="hidden absolute z-[1] group-hover:block w-[150px] bg-[black] p-[10px] rounded-md">
                <p className="text-[white]">List a journal</p>
              </div>
            </li>
            <li className="pl-[15px] cursor-pointer">Review Center</li>
            <li className="pl-[15px] cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </nav>
      {/* SignIn modal */}
      {isSignInModalOpen && (
        <div>
          <Modal
            open={isOpen}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleLogin}>
              <div className="flex relative">
                <div className="bg-gradient-to-r from-[#082857] to-[#3b7fb9] w-[40%] rounded-tl-[20px] rounded-bl-[20px] flex items-center justify-center">
                  <div className="w-[200px]">
                    <h1 className="text-[#fff] font-bold text-[32px]">
                      Hello...
                    </h1>
                    <p className="text-[15px] text-[#fff] leading-[24px]">
                      Don't have an account? Create Your account.It take less
                      than a minute
                    </p>
                  </div>
                </div>
                <div className="pt-[30px] pl-[50px] pb-[50px] pr-[50px] w-[60%]">
                  <div className="absolute right-[10px] top-[10px]">
                    <button
                      className="h-[24px] w-[24px] flex items-center justify-center border-[1px] border-[#ccc] rounded-[50%] cursor-pointer hover:rotate-90 transition-transform duration-30 ease-in-out"
                      onClick={handleSignInCloseModal}
                    >
                      <FaXmark className="shadow-lg font-bold rounded-[50%] text-[15px]" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit1(handleSignInSubmit)}>
                    <h1 className="text-[24px] font-semibold">Login</h1>
                    <p className="text-[15px] leading-[24px] font-normal text-[#636363]">
                      Don't have an account? Create Your account.It take less
                      than a minute
                    </p>
                    <input
                      className="border p-[8px] placeholder:text-[15px] h-[38px] rounded-[2px] text-[14px] text-[#000] focus:outline-none w-[100%] mt-[15px] rounded-md"
                      placeholder="Enter username"
                      type="text"
                      {...register1("loginUsername", {
                        required: {
                          value: true,
                          message: "Please enter username",
                        },
                      })}
                    />
                    <AnimatePresence mode="wait" initial={false}>
                      {errors1.loginUsername && (
                        <motion.p
                          className="text-red-500 text-[12px]"
                          {...framer_error}
                        >
                          {errors1.loginUsername.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <input
                      className="border p-[8px] placeholder:text-[15px] h-[38px] rounded-[2px] text-[14px] text-[#000] focus:outline-none w-[100%] mt-[15px] rounded-md"
                      placeholder="Enter Password"
                      type="password"
                      {...register1("loginPassword", {
                        required: { value: true, message: "required" },
                      })}
                    />
                    <AnimatePresence mode="wait" initial={false}>
                      {errors1.loginPassword && (
                        <motion.p
                          className="text-red-500 text-[12px]"
                          {...framer_error}
                        >
                          {errors1.loginPassword.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <ReCAPTCHA
                      sitekey={key}
                      onChange={signIncaptchaChange}
                      className="mt-[20px]"
                    />
                    <AnimatePresence mode="wait" initial={false}>
                      {errors1.captcha && (
                        <motion.p
                          className="text-red-500 text-[12px]"
                          {...framer_error}
                        >
                          {errors1.captcha.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <label className="text-[14px] font-extralight flex items-center gap-[10px] mt-[10px]">
                      <input type="checkbox" />
                      Remember Me
                    </label>
                    <br />
                    <button className="bg-[#ff4444] font-semibold text-[14px] h-[38px] text-[#fff] pl-[8px] pr-[8px]">
                      Login
                    </button>
                    <p className="text-[14px] mt-[15px] flex gap-[8px] cursor-pointer text-[#000]">
                      <span onClick={ForgotHandler}>Forgot Password</span>
                      <span>|</span>
                      <span onClick={RegisterHandler}>Register Here</span>
                    </p>
                  </form>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      )}
      {/*signUp modal  */}
      {isRegisterModalOpen && (
        <div>
          <Modal
            open={isOpen}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleRegister}>
              <div className="flex justify-end w-[95%] m-auto mt-[15px]">
                <button
                  className="h-[24px] w-[24px] flex items-center justify-center border-[1px] border-[#ccc] rounded-[50%] cursor-pointer hover:rotate-90 transition-transform duration-30 ease-in-out"
                  onClick={handleRegisterCloseModal}
                >
                  <FaXmark className="shadow-lg font-bold rounded-[50%] text-[15px]" />
                </button>
              </div>
              <form
                className="pl-[50px] pr-[50px] pt-[30px] pb-[30px]"
                onSubmit={handleSubmit(handleSubmitSignUp)}
              >
                <div className="h-[83px]  bg-gradient-to-r from-[#082857] to-[#3b7fb9] rounded-[7px] pt-[7px] pl-[9px]">
                  <h1 className="text-white text-[24px] ml-[7px]">Register</h1>
                  <p className="text-white leading-[24px] text-[14px] ml-[7px]">
                    Don't have an account?Create your account.It takes less than
                    a minute
                  </p>
                </div>
                <div className="flex gap-[30px]">
                  <div className="w-[319px]">
                    <input
                      type="text"
                      className="border border-[#dfdfdf] rounded-[2px] focus:outline-none p-[8px] text-[14px] h-[38px] w-full mt-[20px]"
                      placeholder="Enter Username"
                      {...register("username", {
                        required: {
                          value: true,
                          message: "Please enter username",
                        },
                      })}
                    />

                    <AnimatePresence mode="wait" initial={false}>
                      {errors.username && (
                        <motion.p
                          className="text-red-500 text-[12px]"
                          {...framer_error}
                        >
                          {errors.username.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <input
                      className="border border-[#dfdfdf] rounded-[2px] focus:outline-none p-[8px] text-[14px] h-[38px] w-full  mt-[20px]"
                      placeholder="Enter Password"
                      type="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Please enter password",
                        },
                      })}
                    />
                    <AnimatePresence mode="wait" initial={false}>
                      {errors.password && (
                        <motion.p
                          className="text-red-500 text-[12px]"
                          {...framer_error}
                        >
                          {errors.password.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="w-[319px]">
                    <input
                      className="border border-[#dfdfdf] rounded-[2px] focus:outline-none p-[8px] text-[14px] h-[38px] w-full  mt-[20px]"
                      placeholder="Fullname"
                      type="text"
                      {...register("fullname", {
                        required: {
                          value: true,
                          message: "Please enter Fullname",
                        },
                      })}
                    />
                    <AnimatePresence mode="wait" initial={false}>
                      {errors.fullname && (
                        <motion.p
                          className="text-red-500 text-[12px]"
                          {...framer_error}
                        >
                          {errors.fullname.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <input
                      className="border border-[#dfdfdf] rounded-[2px] focus:outline-none p-[8px] text-[14px] h-[38px] w-full  mt-[20px]"
                      placeholder="Email"
                      name="email"
                      type="email"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      {...register("email", {
                        required: "Email is required",
                        validate: (value) =>
                          handleEmailChecking(value) ||
                          "Social emails are not allowed",
                      })}
                    />
                    <AnimatePresence mode="wait" initial={false}>
                      {errors.email && (
                        <motion.p
                          className="text-red-500 text-[12px]"
                          {...framer_error}
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div>
                  <input
                    placeholder="Phone number"
                    className="border border-[#dfdfdf] rounded-[2px] w-[319px] focus:outline-none p-[8px] text-[14px] h-[38px] mt-[20px]"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Please enter Mobilenumber",
                      },
                    })}
                  />
                  <AnimatePresence mode="wait" initial={false}>
                    {errors.phone && (
                      <motion.p
                        className="text-red-500 text-[12px]"
                        {...framer_error}
                      >
                        {errors.phone.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <ReCAPTCHA
                  sitekey={key}
                  onChange={signUpcaptchaChange}
                  className="mt-[15px]"
                />
                <AnimatePresence mode="wait" initial={false}>
                  {errors.regCaptcha && (
                    <motion.p
                      className="text-red-500 text-[12px]"
                      {...framer_error}
                    >
                      {errors.regCaptcha.message}
                    </motion.p>
                  )}
                </AnimatePresence>
                <button className="bg-[#ff4444] h-[38px] p-[8px] text-white rounded-[2px] text-[14px] cursor-pointer font-semibold mt-[15px]">
                  Register
                </button>
                <p className="text-[#000] font-medium leading-[40px]">
                  Are you already a member ?{" "}
                  <span onClick={signInHandler} className="cursor-pointer">
                    Login
                  </span>
                </p>
                {/* <button onClick={signInHandler}>Login</button> */}
              </form>
            </Box>
          </Modal>
        </div>
      )}
      {/* forgot password modal */}
      {isForgotModalOpen && (
        <div>
          <Modal
            open={isOpen}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleLogin}>
              <div className="flex relative">
                <div className="bg-gradient-to-r from-[#082857] to-[#3b7fb9] w-[40%] h-[488px] rounded-tl-[20px] rounded-bl-[20px] flex items-center justify-center">
                  <div className="w-[200px]">
                    <h1 className="text-[#fff] font-bold text-[32px]">
                      Hello...
                    </h1>
                    <p className="text-[15px] text-[#fff] leading-[24px]">
                      Don't have an account? Create Your account.It take less
                      than a minute
                    </p>
                  </div>
                </div>
                <div className="p-[50px] w-[60%]">
                  <div className="absolute right-[10px] top-[10px]">
                    <button
                      className="h-[24px] w-[24px] flex items-center justify-center border-[1px] border-[#ccc] rounded-[50%] cursor-pointer hover:rotate-90 transition-transform duration-30 ease-in-out"
                      onClick={handleForgotCloseModal}
                    >
                      <FaXmark className="shadow-lg font-bold rounded-[50%] text-[15px]" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit2(handleSubmitforgotPassword)}>
                    <h1 className="text-[24px] font-semibold">
                      Forgot Password
                    </h1>
                    <p className="text-[15px] mt-[20px] leading-[24px] font-normal text-[#636363]">
                      Don't have an account? Create Your account.It take less
                      than a minute
                    </p>
                    <input
                      className="border p-[8px] h-[38px] rounded-[2px] text-[14px] text-[#000] focus:outline-none w-[100%] mt-[15px]"
                      placeholder="Enter Your Email"
                      {...register2("forgotEmailPassword", {
                        required: {
                          value: true,
                          message: "Please enter registered email",
                        },
                      })}
                    />
                    <AnimatePresence mode="wait" initial={false}>
                      {errors2.forgotEmailPassword && (
                        <motion.p
                          className="text-red-500 text-[12px]"
                          {...framer_error}
                        >
                          {errors2.forgotEmailPassword.message}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button className="bg-[#ff4444] mt-[15px] font-semibold text-[14px] h-[38px] text-[#fff] pl-[8px] pr-[8px]">
                      Submit
                    </button>
                    <p className="text-[14px] mt-[15px] flex gap-[8px] cursor-pointer text-[#000]">
                      Are you already a member?
                      <span onClick={signInHandler}>Login</span>
                      <span>|</span>
                      <span onClick={RegisterHandler}>Register Here</span>
                    </p>
                  </form>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      )}
      {/* otp modal */}
      {isMailVerificationModal && (
        <div>
          <Modal
            open={isOpen}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={otpverifystyle}>
              <div className="p-[50px] relative">
                <div className="absolute right-[10px] top-[10px]">
                  <button
                    className="h-[24px] w-[24px] flex items-center justify-center border-[1px] border-[#ccc] rounded-[50%] cursor-pointer hover:rotate-90 transition-transform duration-30 ease-in-out"
                    onClick={handleVerifyotpModal}
                  >
                    <FaXmark className="shadow-lg font-bold rounded-[50%] text-[15px]" />
                  </button>
                </div>
                <h1 className="text-[25px] font-semibold">
                  Email verification
                </h1>
                <p className="mt-[20px]">
                  Please enter the verification code sent to your email address
                </p>
                <p className="font-bold mt-[5px]">verfication code</p>
                <input
                  className="placeholder:text-[13px] border focus:outline-none rounded-[10px] p-[5px] pl-[10px] shadow-2xl mt-[10px]"
                  placeholder="Enter OTP here"
                />{" "}
                <br />
                <button
                  className="mt-[10px] rounded-md bg-[#ff4444] font-semibold text-[14px] h-[38px] text-[#fff] pl-[8px] pr-[8px]"
                  onClick={() =>
                    toast("OTP verification Successfull", {
                      type: "success",
                      autoClose: 2000,
                    })
                  }
                >
                  Submit
                </button>
              </div>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Header;
