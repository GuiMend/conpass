import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import MenuDownIcon from "mdi-react/MenuDownIcon";
import MenuUpIcon from "mdi-react/MenuUpIcon";
import TopSection from "components/UI/TopSection";
import IconWrapper from "components/UI/IconWrapper";
import ThickDivider from "components/UI/ThickDivider";
import UserCard from "components/UserCard";
import MenuButton from "components/UI/MenuButton";

const UsersList = ({ usersList }) => {
  if (usersList.length === 0)
    return (
      <Typography variant="display1">
        Add new users to see a list here!
      </Typography>
    );

  // TODO: Order by date
  // TODO: change order when "Created at is clicked"
  // TODO: add button effect transform

  return (
    <div>
      <TopSection marginBottom="10">
        <Typography variant="title" color="primary">
          Full Name
        </Typography>
        <MenuButton>
          <Typography variant="title" color="primary">
            Created at
          </Typography>
          <IconWrapper fill="gray" size="24">
            {false ? <MenuUpIcon /> : <MenuDownIcon />}
          </IconWrapper>
        </MenuButton>
      </TopSection>
      <ThickDivider />
      {usersList.map((user, index) => (
        <div key={`${user.name}.${index}`}>
          <UserCard {...user} />
          <ThickDivider />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  usersList: state.app.usersList
});

export default connect(mapStateToProps)(UsersList);
