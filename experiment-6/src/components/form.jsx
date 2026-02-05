import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Minimum 3 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Minimum 8 characters"),
    terms: yup.boolean().oneOf([true], "You must accept the terms"),
  })
  .required();

export default function FormSection() {
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "3rem auto", padding: "0 1rem" }}>
      <header style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem" }}>Experiment 6</h1>
        <p style={{ color: "#666" }}>Form Handling & Schema Validation</p>
      </header>

      <div style={{ display: "grid", gap: "2rem" }}>
        {/* Registration Card */}
        <div
          style={{
            border: "1px solid #e5e5e5",
            padding: "2rem",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem" }}>Account Registration</h3>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                USERNAME
              </label>
              <input {...register("username")} placeholder="e.g. pratyush001" />
              <p className="error-text">{errors.username?.message}</p>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                EMAIL ADDRESS
              </label>
              <input {...register("email")} placeholder="name@company.com" />
              <p className="error-text">{errors.email?.message}</p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                PASSWORD
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="••••••••"
              />
              <p className="error-text">{errors.password?.message}</p>
            </div>

            <div
              style={{
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <input
                type="checkbox"
                {...register("terms")}
                style={{ width: "auto", margin: 0 }}
              />
              <span style={{ fontSize: "0.9rem" }}>
                I agree to the terms of service
              </span>
            </div>
            {errors.terms && (
              <p className="error-text">{errors.terms.message}</p>
            )}

            <button type="submit" style={{ width: "100%" }}>
              CREATE ACCOUNT
            </button>
          </form>
        </div>

        {/* Profile Card */}
        <div
          style={{
            border: "1px solid #e5e5e5",
            padding: "2rem",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem" }}>Profile Verification</h3>
          <label style={{ fontSize: "0.85rem", fontWeight: "600" }}>
            UPLOAD PROFILE IMAGE
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ border: "none", padding: "1rem 0" }}
          />

          {preview && (
            <div style={{ margin: "1rem 0", textAlign: "center" }}>
              <img
                src={preview}
                alt="Avatar"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #000",
                }}
              />
            </div>
          )}
          <button
            type="button"
            style={{
              width: "100%",
              background: "#f0f0f0",
              color: "#000",
              marginTop: "1rem",
            }}
          >
            SAVE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
}
