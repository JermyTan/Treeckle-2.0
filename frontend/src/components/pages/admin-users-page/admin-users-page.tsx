import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { ADMIN_USERS_CREATION_PATH } from "../../../routes";
import UserInvitesSection from "../../user-invites-section";
import UsersSection from "../../users-section";

function AdminUsersPage() {
  return (
    <>
      <Button
        animated="vertical"
        fluid
        color="teal"
        as={Link}
        to={ADMIN_USERS_CREATION_PATH}
      >
        <Button.Content hidden content="Create New Users" />
        <Button.Content visible content={<Icon name="add" />} />
      </Button>

      <UserInvitesSection />

      <UsersSection />
    </>
  );
}

export default AdminUsersPage;
