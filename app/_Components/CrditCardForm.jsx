import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React, { useState } from "react";
import { Alert, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { ActiveSubscribtion } from "../_Redux/features/StoreSlice";

const CrditCardForm = ({ setopenPaymentMethod }) => {
  let [cardNumber, setcardNumber] = useState("");
  let [Expirydate, setExpirydate] = useState("");
  let [cvv, setcvv] = useState("");
  let [cardholder, setcardholder] = useState("");
  let [WrongCardInfo, setWrongCardInfo] = useState(false);
  let dispach = useDispatch();
  return (
    <Card className="card-content" id="PaymentMethod">
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card number</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<CreditCardIcon />}
            onChange={(e) => {
              setcardNumber(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel> Expiry date</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<CreditCardIcon />}
            onChange={(e) => {
              setExpirydate(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<InfoOutlined />}
            onChange={(e) => {
              setcvv(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel> Card holder name </FormLabel>
          <Input
            className="input"
            placeholder="Enter cardholder's full name"
            onChange={(e) => {
              setcardholder(e.target.value);
            }}
          />
        </FormControl>
        <Checkbox label="  Save Card" sx={{ gridColumn: "1/-1", my: 1 }} />
        <Box className="info" sx={{ gridColumn: "1/-1" }}>
          Card details are stored for subscription renewals and future
          purchases. It was completed The card was verified with a temporary
          hold of $0.50, and it was done Edited after a few days
        </Box>
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button
            variant="solid"
            color="primary"
            onClick={() => {
              if (
                cardholder.length > 2 &&
                cvv.length > 2 &&
                Expirydate.length > 2 &&
                cardNumber.length > 2
              ) {
                setWrongCardInfo(false);
                setopenPaymentMethod(false);
                dispach(ActiveSubscribtion());
              } else {
                setWrongCardInfo(true);
              }
            }}
          >
            Confirm Payment
          </Button>
        </CardActions>
      </CardContent>

      {WrongCardInfo ? (
        <Alert
          severity="error"
          style={{
            position: "absolute",
            top: "-60px",
            width: "100%",
            justifyContent: "center",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          There is an error in some of your data. Please re-enter it.
        </Alert>
      ) : (
        ""
      )}
    </Card>
  );
};

export default CrditCardForm;
