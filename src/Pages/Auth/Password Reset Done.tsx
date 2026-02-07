import { Box, Card, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const PasswordResetDone = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default", // لون الخلفية الرئيسي من الثيم
        p: 2, // padding للتجاوب مع الموبايل
      }}
    >
      <Card
        sx={{
          width: 400,
          maxWidth: "95%", // للتجاوب مع الشاشات الصغيرة
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          bgcolor: "background.paper", // لون الورقة من الثيم
          boxShadow: 3, // ظل خفيف
        }}
      >
        <CheckCircleIcon
          sx={{ fontSize: 60, color: "success.main", mb: 2 }} // لون النجاح من الثيم
        />

        <Typography variant="h6" fontWeight={600} mb={1} color="text.primary">
          Password Reset Done
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Your password has been reset successfully. You can now access
          your account.
        </Typography>

        <Button
          variant="contained"
          color="primary" // يستخدم لون primary.main من الثيم
          fullWidth
          onClick={() => navigate("/login")}
          sx={{ py: 1.5 }}
        >
          Sign In
        </Button>
      </Card>
    </Box>
  );
};

export default PasswordResetDone;
