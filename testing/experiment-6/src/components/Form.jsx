import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';  // Add this line
import { describe, it, expect, vi, beforeEach } from "vitest";

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 0 && value.length < 6) {
      setPasswordError('Min 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordError('Min 6 characters');
      return;
    }
    setPasswordError('');
    alert('Form submitted successfully');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
      }}
    >
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={!!passwordError}
        helperText={passwordError}
        fullWidth
      />
      <Button 
        type="submit" 
        variant="contained" 
        fullWidth
        disabled={password.length < 6}
      >
        Login
      </Button>
    </Box>
  );
}

export default Form;

describe('Form', () => {
  it('should display a form with email and password fields', () => {
    const { container } = render(<Form />);
    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Login');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should not allow submission with password less than 6 characters', () => {
    const { container } = render(<Form />);
    const passwordField = screen.getByLabelText('Password');
    fireEvent.change(passwordField, { target: { value: '123' } });
    const submitButton = screen.getByText('Login');

    expect(submitButton).not.toBeEnabled();
  });

  it('should allow submission with password 6 characters or more', () => {
    const { container } = render(<Form />);
    const passwordField = screen.getByLabelText('Password');
    fireEvent.change(passwordField, { target: { value: '123456' } });
    const submitButton = screen.getByText('Login');

    expect(submitButton).toBeEnabled();
  });
});