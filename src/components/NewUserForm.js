import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import { Formik, Field } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ActionButton from "components/UI/ActionButton";
import { NEW_USER } from "utils/constants";
import Input from "components/UI/Input";
import blankImg from "img/gray.jpg";
import { addNewUser } from "redux/app/actions";

const TwoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const BackButton = styled(Button)`
  && {
    margin-right: 10px;
  }
`;

const UploadSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadAvatar = styled(Avatar)`
  && {
    height: 200px;
    width: 200px;
  }
`;

const UploadText = styled.span`
  position: fixed;
  text-align: center;
  max-width: 180px;
`;

const NewUserForm = ({
  activeStep,
  nextStep,
  previousStep,
  history,
  addUser
}) => {
  const newUser = JSON.parse(localStorage.getItem(NEW_USER));
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        password: "",
        repeatPassword: "",
        profilePhoto: "",
        ...newUser
      }}
      onSubmit={(values, actions) => {
        delete values.password;
        delete values.repeatPassword;
        const user = { ...values, created_at: Date.now() };
        actions.setSubmitting(false);
        addUser(user);
        history.push("/users");
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          {activeStep === 0 ? (
            <div>
              <TwoItemWrapper>
                <Field
                  name="firstName"
                  label="First Name"
                  placeholder="i.e. John"
                  component={Input}
                />
                <Spacer />
                <Field
                  name="lastName"
                  label="Last Name"
                  placeholder="i.e. Michael"
                  component={Input}
                />
              </TwoItemWrapper>

              <Field
                name="companyName"
                label="Company Name"
                placeholder="i.e. Apple Inc"
                component={Input}
              />
              <Field
                type="email"
                name="email"
                label="Email"
                placeholder="i.e. name@company.com"
                component={Input}
              />
              <TwoItemWrapper>
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  component={Input}
                />
                <Spacer />
                <Field
                  type="password"
                  name="repeatPassword"
                  label="Repeat Password"
                  component={Input}
                />
              </TwoItemWrapper>
            </div>
          ) : (
            <div>
              <Field
                name="profilePhoto"
                render={props => {
                  const {
                    field,
                    form: { setFieldValue }
                  } = props;
                  return (
                    <UploadSection>
                      <UploadAvatar
                        src={field.value || blankImg}
                        onClick={() =>
                          document
                            .getElementById("upload-profile-photo")
                            .click()
                        }
                      />
                      <UploadText>
                        {field.value === ""
                          ? `Click to upload your profile image`
                          : `Click to Edit image`}
                      </UploadText>
                      {/* This input html tag is to Upload Image */}
                      <input
                        style={{ display: "none" }}
                        id="upload-profile-photo"
                        type="file"
                        accept="image/*"
                        onChange={e => {
                          const fileList = e.target.files;
                          let file = null;
                          for (let i = 0; i < fileList.length; i++) {
                            if (fileList[i].type.match(/^image\//)) {
                              file = fileList[i];
                              break;
                            }
                          }
                          if (file !== null) {
                            var reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = function() {
                              setFieldValue(field.name, reader.result);
                            };
                          }
                        }}
                      />
                    </UploadSection>
                  );
                }}
              />
            </div>
          )}

          <div>
            {
              {
                0: (
                  <ActionButton
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      localStorage.setItem(
                        NEW_USER,
                        JSON.stringify(props.values, null, 2)
                      );
                      nextStep();
                    }}
                  >
                    Next
                  </ActionButton>
                ),
                1: (
                  <div>
                    <BackButton onClick={() => previousStep()}>Back</BackButton>
                    <ActionButton
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Finish
                    </ActionButton>
                  </div>
                )
              }[activeStep]
            }
          </div>
        </form>
      )}
    />
  );
};

// Redux dispatch
const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addNewUser(user))
});

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(NewUserForm);
