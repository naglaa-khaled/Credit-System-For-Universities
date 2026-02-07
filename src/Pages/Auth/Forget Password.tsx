import { Box, Card, Typography, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

interface IFormInput {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Must be a valid email").required("Email is required"),
});

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { email: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log("Form Submitted. Data:", data);
    setIsSubmitted(true);
  };

  // --- Show confirmation after submission ---
  if (isSubmitted) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default", // من الثيم
          p: 2,
        }}
      >
        <Card
          sx={{
            p: 4,
            width: 400,
            maxWidth: "95%",
            bgcolor: "background.paper", // من الثيم
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" mb={2} color="text.primary">
            Check your email
          </Typography>
          <Typography color="text.secondary">
            We have sent a password reset link to your email address.
          </Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default", // من الثيم
        p: 2,
      }}
    >
      <Card
        sx={{
          p: 4,
          width: 400,
          maxWidth: "95%",
          bgcolor: "background.paper", // من الثيم
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" mb={1} color="text.primary">
          Forgot Password
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Enter your email and we'll send you a link to reset your password.
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email Address"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary" // من الثيم
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
          >
            Reset Password
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ForgotPassword;
