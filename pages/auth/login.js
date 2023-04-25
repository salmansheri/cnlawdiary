import React, { useState } from "react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux'; 
import { loggedUser } from "@/redux/userSlice";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 
  const dispatch = useDispatch(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    // const user = await fetch("http://localhost:3000/api/auth/login", {
    //   method: "POST", 
    //   headers: {
    //     "Content-Type":"application/json",
    //   }, 
    //   body: JSON.stringify({
    //     email: email, 
    //     password:password,
    //   })

    // })

    // const data = await user.json(); 
    // console.log(data)

    
    // if(data.email === email) {
    //   dispatch(loggedUser({email: data.email,username: data.username, id: data._id, photo: data.photo})); 
    //   router.push("/")
     

    // } 
    // if(data.message) {
    //   alert("Wrong Credentials")
    // }
    signIn("credentials", {
      email, 
      password
    })

    router.push("/")

    
  }

  return (
    <div className="px-5 lg:mx-[200px] xl:mx-[400px]">
      <div className="bg-white p-10 rounded-md shadow-md mt-[100px]">
        <h1 className="text-center font-medium text-2xl md:text-3xl lg:text-4xl">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="hello@gmail.com"
              required={true}
             
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
              value={password}
             
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button
            type="submit"
            className=" bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 mb-5"
          >
            Submit
          </Button>
        </form>
        <div>
          <span className="text-red-500">Dont Have Account?</span>
          <Link className="text-blue-500 hover:underline" href="/auth/register">
            {" "}
            create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
