import { Box, Card, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const EmailSent = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default", // لون الخلفية الرئيسي من الثيم
        p: 2, // padding صغير للتجاوب مع الموبايل
      }}
    >
      <Card
        sx={{
          width: 400,
          maxWidth: "95%", 
          p: 4,
          textAlign: "center",
          borderRadius: 3,
          bgcolor: "background.paper", 
          boxShadow: 3, 
        }}
      >
        <CheckCircleIcon
          sx={{ fontSize: 60, color: "success.main", mb: 2 }} // لون النجاح من الثيم
        />

        <Typography variant="h6" fontWeight={600} mb={1} color="text.primary">
          Successfully Sent
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          We have sent instructions on how to reset your password to
          your email. Please follow the instructions from the email.
        </Typography>

        <Button
          variant="contained"
          color="primary" // يستخدم لون primary.main من الثيم
          fullWidth
          onClick={() => navigate("/login")}
          sx={{ py: 1.5 }}
        >
          Back to Login
        </Button>
      </Card>
    </Box>
  );
};

export default EmailSent;
