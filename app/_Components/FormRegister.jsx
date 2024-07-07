"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { ActiveLoggin, AddnewUser } from "../_Redux/features/StoreSlice";
import { useRouter } from "next/navigation";

function FormRegister() {
  let { newuser } = useSelector((s) => s.ASR);
  const [validated, setValidated] = useState(false);
  const [NewFirstName, setFirstName] = useState("");
  const [NewLastName, setLastName] = useState("");
  const [NewEmail, setEmail] = useState("");
  const [NewPassword, setPassword] = useState("");
  const [NewPhone, setPhone] = useState("");
  const [NewAge, setAge] = useState("");
  const [NewHight, setHight] = useState("");
  const [NewWeight, setWeight] = useState("");
  const [NewSubscribtion_Type, setNewSubscribtion_Type] = useState("");
  const [openLoginForm, setopenLoginForm] = useState(false);
  let dispatch = useDispatch();
  let router = useRouter();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {
      let data = {
        NewFirstName,
        NewLastName,
        NewEmail,
        NewPassword,
        NewPhone,
        NewAge,
        NewHight,
        NewWeight,
        NewSubscribtion_Type,
      };
      dispatch(AddnewUser(data));
      dispatch(ActiveLoggin());
      router.push("/UserProfile");
    } else {
      setValidated(true);
    }
  };

  return (
    <>
      {openLoginForm == true ? (
        <Form
          className="Form"
          onSubmit={(e) => {
            e.preventDefault();
            if (
              NewEmail == newuser.NewEmail &&
              NewPassword == newuser.NewPassword
            ) {
              dispatch(ActiveLoggin());
              router.push("/UserProfile");
            }
          }}
        >
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Email Address</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email Address"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter a Email
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter a Password
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Button className="btn btn-warning" type="submit" id="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="Form"
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please Enter your First Name
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please Enter your Last Name
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Email Address</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  aria-describedby="inputGroupPrepend"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter a Email
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Phone Number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter a Phone Number
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter a Password
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Subscription type</Form.Label>
              <InputGroup hasValidation>
                <Form.Select
                  aria-label="Default select example "
                  onChange={(e) => {
                    setNewSubscribtion_Type(e.target.value);
                  }}
                >
                  <option>Select Subscription Type</option>
                  <option value="Titanium">Titanium</option>
                  <option value="Vipers">Vipers</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Bronze">Bronze</option>
                  <option value="Max">Max</option>
                </Form.Select>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Age"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Age
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom08">
              <Form.Label>Hight</Form.Label>
              <Form.Control
                type="number"
                placeholder="Hight"
                onChange={(e) => {
                  setHight(e.target.value);
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Hight
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom07">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                placeholder="Weight"
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Weight
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button className="btn btn-warning" type="submit" id="submit">
            Submit
          </Button>
          <div
            className="haveAccount mt-2"
            onClick={(e) => {
              setopenLoginForm(true);
            }}
          >
            Already have an Account? Sign in
          </div>
        </Form>
      )}
    </>
  );
}

export default FormRegister;
