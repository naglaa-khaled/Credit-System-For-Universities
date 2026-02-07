import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Role = "admin" | "instructor" | "management";

interface IFormInput {
  email: string;
  password: string;
  role: Role;
}

const schema = yup.object().shape({
  email: yup.string().email("Must be a valid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  role: yup
    .string()
    .oneOf(["admin", "instructor", "management"], "Role is required")
    .required("Role is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { email: "", password: "", role: "admin" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    localStorage.setItem("role", data.role);

    if (data.role === "admin") navigate("/admin");
    else if (data.role === "instructor") navigate("/instructor");
    else if (data.role === "management") navigate("/management");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default", // لون الخلفية من الثيم
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: 400 },
          maxWidth: "100%",
          p: { xs: 3, sm: 4 },
          bgcolor: "background.paper", // لون الورقة من الثيم
          boxShadow: 3,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box component="img" src={logo} alt="University Logo" sx={{ width: 134, height: 138 }} />
        </Box>

        <Typography
          variant="h5"
          textAlign="center"
          color="primary.main" // عنوان باللون الأساسي من الثيم
          fontWeight={600}
          mb={1}
        >
          Faculty of Engineering
        </Typography>

        <Typography variant="body2" textAlign="center" color="text.secondary" mb={3}>
          Sign in to your account
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                margin="normal"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                margin="normal"
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          {/* Role Field */}
          <FormControl fullWidth margin="normal" error={!!errors.role}>
            <InputLabel>Role</InputLabel>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Role">
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="instructor">Instructor</MenuItem>
                  <MenuItem value="management">Management</MenuItem>
                </Select>
              )}
            />
            {errors.role && <FormHelperText>{errors.role.message}</FormHelperText>}
          </FormControl>

          {/* Forgot Password Link */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <Typography
              component={Link}
              to="/forgot-password"
              variant="body2"
              color="primary.main" // رابط باللون الأساسي من الثيم
              sx={{
                textDecoration: "none",
                fontSize: 13,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Forgot password?
            </Typography>
          </Box>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, py: 1.5 }}>
            Login
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
