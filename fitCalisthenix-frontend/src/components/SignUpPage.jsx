import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

class SignUpPage extends Component {
  render() {
    return (
      <div className="signup-form-container">
        <br></br>
        <Form>
          <FormGroup>
            <Label for="name">Your Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password "
            />
          </FormGroup>
          {/* <FormGroup>
            <Label for="exampleUrl">Url</Label>
            <Input
              type="url"
              name="url"
              id="exampleUrl"
              placeholder="url placeholder"
            />
          </FormGroup> */}
          <FormGroup>
            <Label for="exampleNumber">AGE</Label>
            <Input
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="number placeholder"
            />
          </FormGroup>
          {/* <FormGroup>
            <Label for="exampleDatetime">Datetime</Label>
            <Input
              type="datetime"
              name="datetime"
              id="exampleDatetime"
              placeholder="datetime placeholder"
            />
          </FormGroup> */}
          {/* <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup> */}
          {/* <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </FormGroup> */}
          {/* <FormGroup>
            <Label for="exampleColor">Color</Label>
            <Input
              type="color"
              name="color"
              id="exampleColor"
              placeholder="color placeholder"
            />
          </FormGroup> */}
          {/* <FormGroup>
            <Label for="exampleSearch">Search</Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="search placeholder"
            />
          </FormGroup> */}
          <FormGroup>
            <Label for="exampleSelect">Select Experience Level</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Upload Selfie</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This will be your photo for motivation.
            </FormText>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" /> Option one is this and that—be sure to
              include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SignUpPage;
