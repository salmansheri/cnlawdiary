import { useState } from "react";
import { Label, TextInput, Button, FileInput } from "flowbite-react";
import Link from "next/link";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    secondname: "",
    username: "",
    email: "",
    password: "",
    photo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: data.firstname,
          lastname: data.secondname,
          username: data.username,
          email: data.email,
          password: data.password,
          photo: data.photo,
        }),
      });

      if (response) {
        alert("successfully registered");
      }
    } catch (err) {
      console.log(err);
      alert("something went wrong ");
    }
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setData({ ...data, photo: base64 });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader(); 
      fileReader.readAsDataURL(file); 

      fileReader.onload = () => {
        resolve(fileReader.result); 
      }

      fileReader.onerror = () => {
        reject(error); 
      }
    })
    
  };

  return (
    <div className="px-5 lg:mx-[200px] xl:mx-[400px]">
      <div className="bg-white p-10 rounded-md shadow-md mt-[100px]">
        <h1 className="text-center font-medium text-2xl md:text-3xl lg:text-4xl">
          Register
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-3 mt-7">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="First Name" />
              </div>
              <TextInput
                id="firstname"
                type="text"
                placeholder="Enter Your First name"
                required={true}
                value={data.firstname}
                onChange={(e) =>
                  setData({ ...data, firstname: e.target.value })
                }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Second Name" />
              </div>
              <TextInput
                id="secondname"
                type="text"
                placeholder="Enter Your Second Name"
                required={true}
                value={data.secondname}
                onChange={(e) =>
                  setData({ ...data, secondname: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
              required={true}
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="text"
              placeholder="hello@gmail.com"
              required={true}
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="Enter password"
              required={true}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo" value="choose Photo" />
            </div>
            <FileInput
              id="file"
              helperText="A profile picture is useful to confirm your are logged into your account"
              onChange={(e) => uploadImage(e)}
            />
          </div>

          <Button
            type="submit"
            className=" bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 mb-5"
          >
            Submit
          </Button>
        </form>
        <div>
          <span className="text-red-500">Have account? </span>
          <Link className="text-blue-500 hover:underline" href="/auth/login">
            {" "}
            then Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
