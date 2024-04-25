import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { addQuote } from "../api/firebase";
import { useUser } from "../context/UserContext";
import Button from "./components/UI/Button";

export default function AddQuote() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const { user } = useUser();
  // Input field common classes
  const inputClasses =
    "shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  useEffect(() => {
    if (user) {
      setValue("writer", user.displayName);
    }
  }, [user]);
  const onSubmit = async (data) => {
    try {
      await addQuote(data);
      reset();
      alert("Quote saved successfully!");
    } catch (error) {
      console.error("Error adding quote:", error);
      alert("Failed to save quote.");
    }
  };
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col "
        >
          <div className="mb-2">
            <input
              name="writer"
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="입력해주세요"
              type="text"
              {...register("writer", { required: true })}
            />
            {errors.writer && (
              <span className="text-red-500 text-sm">필수항목 입니다.</span>
            )}
          </div>
          <div className="mb-2">
            <textarea
              {...register("quote", { required: true })}
              className={`${inputClasses} resize-none`}
              placeholder="구절을 작성해주세요."
              rows="6"
            />
            {errors.quote && (
              <span className="text-red-500 text-sm">필수항목 입니다.</span>
            )}
          </div>
          <div className="mb-4">
            <input
              {...register("source")}
              className={inputClasses}
              placeholder="출처 (책, 영화, ...)"
              type="text"
            />
          </div>
          <Button text="Save" type="submit" />
        </form>
      </div>
    </div>
  );
}
