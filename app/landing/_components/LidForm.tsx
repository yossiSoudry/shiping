"use client"
import { useState } from "react";
import type { NextPage } from "next";

export type LidFormType = {
  title?: boolean;
};

const LidForm: NextPage<LidFormType> = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://hook.eu2.make.com/6nsscn50dbfjcn754cuuqe4nohkmwosq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("תודה! הפרטים נשלחו בהצלחה.");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        setMessage("אירעה שגיאה בשליחת הטופס. נסה שוב מאוחר יותר.");
      }
    } catch (error) {
      setMessage("אירעה תקלה. אנא נסה שוב.");
    }
  };

  return (
    <div className="max-w-4xl w-full bg-white shadow-xl border border-orange-200 rounded-lg p-8 mx-4 min-h-32 flex flex-col justify-center border-t-orange-300 border-b-orange-100">
      {title && (
        <h2 className="text-2xl w-full text-start text-sky-800 mb-6">
          השאירו פרטים ותתחילו להתייעל
        </h2>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-800"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="שם"
          className="w-full md:w-1/4 p-1 md:p-3 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-steelblue-500"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="טלפון"
          className="w-full md:w-1/4 p-1 md:p-3 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-steelblue-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="אימייל"
          className="w-full md:w-1/4 p-1 md:p-3 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-steelblue-500"
          required
        />
        <button
          type="submit"
          className="w-full md:w-1/4 p-1 md:p-3 px-3 bg-sky-800 text-white font-bold rounded hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-800"
        >
          תבדקו אותנו
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default LidForm;
