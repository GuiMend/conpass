import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import MenuDownIcon from "mdi-react/MenuDownIcon";
import MenuUpIcon from "mdi-react/MenuUpIcon";
import TopSection from "components/UI/TopSection";
import IconWrapper from "components/UI/IconWrapper";
import ThickDivider from "components/UI/ThickDivider";
import UserCard from "components/UserCard";
import MenuButton from "components/UI/MenuButton";
import { sortListCreatedFirst, sortListCreatedLast } from "utils/helper";

class UsersList extends Component {
  state = {
    sortedList: [],
    first: true
  };

  changeSorting = (list, first) => {
    this.setState({
      sortedList: first
        ? sortListCreatedLast(list)
        : sortListCreatedFirst(list),
      first: !first
    });
  };
  componentDidMount() {
    this.setState({ sortedList: sortListCreatedFirst(this.props.usersList) });
  }

  render() {
    const { sortedList, first } = this.state;
    const { usersList } = this.props;
    if (usersList.length === 0)
      return (
        <Typography variant="display1">
          Add new users to see a list here!
        </Typography>
      );

    return (
      <div>
        <TopSection marginBottom="10">
          <Typography variant="title" color="primary">
            Full Name
          </Typography>
          <MenuButton onClick={() => this.changeSorting(sortedList, first)}>
            <Typography variant="title" color="primary">
              Created at
            </Typography>
            <IconWrapper fill="gray" size="24">
              {first ? <MenuDownIcon /> : <MenuUpIcon />}
            </IconWrapper>
          </MenuButton>
        </TopSection>
        <ThickDivider />
        {sortedList.map((user, index) => (
          <div key={`${user.name}.${index}`}>
            <UserCard {...user} />
            <ThickDivider />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.app.usersList
});

export default connect(mapStateToProps)(UsersList);
