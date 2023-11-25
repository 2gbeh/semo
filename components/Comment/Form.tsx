"use client";
import React, { useState } from "react";
import {
  FaPenToSquare,
  FaRegPaperPlane,
  FaRegFaceSmile,
} from "react-icons/fa6";
// 
import { AvatarSolid } from "../Avatar";
import M from "@/utils/constants/MOCK";

const tw = {
  input:
    "border-2 block w-full mb-2 py-2 px-3.5 rounded-full text-sm focus:border-gray-400 outline-none",
};

const CommentForm = () => {
  const [openForm, setOpenForm] = useState(Boolean(M.comment));
  const [formData, setFormData] = useState(
    M.comment
      ? {
          sender: "2gbeh",
          message: "Congratulations Webmaster T",
        }
      : {
          sender: "",
          message: "",
        }
  );
  const updateFormData = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value.trim(),
    }));
  //
  return (
    <div className="mb-5">
      <form autoComplete="off">
        {openForm ? (
          <>
            <div className="flex items-start gap-2">
              <p>
                <AvatarSolid text={formData.sender} color="black" size={38} />
              </p>
              <p className="w-full flex-1">
                <input
                  type="search"
                  name="sender"
                  value={formData.sender}
                  onChange={updateFormData}
                  placeholder="Display name"
                  required
                  className={tw.input}
                />
              </p>
            </div>
            <div className="relative">
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={updateFormData}
                placeholder="Enter comment"
                required
                className={tw.input}
              />
              <button
                type="button"
                onClick={() => setOpenForm(false)}
                title="Emoji"
                className="absolute top-3 right-12"
              >
                <FaRegFaceSmile color="gray" />
              </button>
              <button
                type="button"
                onClick={() => setOpenForm(false)}
                title="Send"
                className="absolute top-3 right-5"
              >
                <FaRegPaperPlane color="gray" />
              </button>
            </div>
          </>
        ) : (
          <div
            onClick={() => setOpenForm(true)}
            className=" flex justify-between items-center border-2 rounded-full text-sm py-2 px-3.5"
          >
            <p className="text-gray-500">Enter comment</p>
            <p className="cursor-pointer">
              <FaPenToSquare color="gray" />
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default React.memo(CommentForm);
