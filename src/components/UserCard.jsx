import React from 'react'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const UserCard = ({user}) => {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://www.creativefabrica.com/wp-content/uploads/2021/07/31/People-Card-Graphics-15307893-1.jpg"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={user.name}
        description={user.email}
      />
      <p className='flex justify-center '>{user.address?.city}</p>
    </Card>
  );
}

export default UserCard