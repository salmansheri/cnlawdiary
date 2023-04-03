import React, { useState } from "react";
import Layout from "@/components/Layout";

import ClientTable from "@/components/tables/ClientTable";
import ClientModals from "@/components/Modals/addModals/ClientModals";

const MyClients = ({ clients }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [myClients, setMyClients] = useState(clients);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileno, setMobileNo] = useState(0);
  const [email, setEmail] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          address: address,
          mobile: mobileno,
          email: email,
        }),
      });

      alert("client Created successfully");
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      alert(`Do you want to delete the Client with id ${id}`);
      const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMyClients(myClients.filter((client) => client._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id) => {};

  return (
    <Layout>
      <div className="mt-10 px-2">
        <button
          className="flex gap-1 mb-7 bg-blue-500 px-2 py-2 rounded-md text-white hover:bg-blue-700 active:bg-blue-900"
          onClick={() => setIsClicked(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Clients
        </button>
        <ClientTable
          handleDelete={handleDelete}
          setIsClicked={setIsClicked}
          myClients={myClients}
        />

        {isClicked && (
          <div>
            <ClientModals
              SetIsClicked={setIsClicked}
              handleClick={handleClick}
              setName={setName}
              setAddress={setAddress}
              setMobileno={setMobileNo}
              setEmail={setEmail}
              setIsClicked={setIsClicked}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/clients", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return {
    props: {
      clients: data,
    },
  };
};

export default MyClients;
