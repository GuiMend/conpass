import React, { Component } from "react";
import styled from "styled-components";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Title from "components/UI/Title";
import TopSection from "components/UI/TopSection";
import NewUserForm from "components/NewUserForm";

const Wrapper = styled.div`
  margin: 80px 200px;
`;

const CustomStepper = styled(Stepper)`
  && {
    background: #ffffff00;
    flex-grow: 0.3;

    svg {
      font-size: 36px;
    }
  }
`;

class NewUser extends Component {
  state = {
    activeStep: 0
  };

  render() {
    const { activeStep } = this.state;
    const steps = this.getSteps();
    return (
      <Wrapper>
        <TopSection marginBottom="50">
          {activeStep === 0 ? (
            <Title title="Register" />
          ) : (
            <Title title="Profile photo" />
          )}
          <CustomStepper activeStep={activeStep}>
            {steps.map(label => {
              return (
                <Step key={label}>
                  <StepLabel />
                </Step>
              );
            })}
          </CustomStepper>
        </TopSection>
        <NewUserForm
          activeStep={activeStep}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
        />
      </Wrapper>
    );
  }

  getSteps = () => ["User Information", "Profile Picture"];

  nextStep = () =>
    this.setState(prevState => ({ activeStep: ++prevState.activeStep }));

  previousStep = () =>
    this.setState(prevState => ({ activeStep: --prevState.activeStep }));
}
export default NewUser;
