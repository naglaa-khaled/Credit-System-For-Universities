import { Box, Card, Typography, TextField, Button } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], "Passwords must match")
    .required("You must confirm your password"),
});

const ResetPassword = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors } } = useForm<IFormInput>({
    defaultValues: { password: "", confirmPassword: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log("New password data:", data);
    navigate("/password-reset-done");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default", // لون الخلفية من الثيم
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          maxWidth: "95%",
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          bgcolor: "background.paper", // لون الورقة من الثيم
          boxShadow: 3,
        }}
      >
        <LockResetIcon
          sx={{ fontSize: 55, color: "primary.main", mb: 2 }} // لون الثيم الأساسي
        />
        <Typography variant="h6" fontWeight={600} mb={1} color="text.primary">
          Reset Password
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Enter your new password below
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="New Password"
                type="password"
                fullWidth
                margin="normal"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Repeat New Password"
                type="password"
                fullWidth
                margin="normal"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary" // لون الثيم الأساسي
            fullWidth
            sx={{ mt: 3, py: 1.2 }}
          >
            Reset Password
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ResetPassword;
