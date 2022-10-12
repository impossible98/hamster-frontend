// import third-party modules
import {
  Avatar,
  Button,
  Card,
  Grid,
  Image,
  Space,
  Typography,
} from '@arco-design/web-react';
import { Star } from '@icon-park/react';
import React from 'react';
// import local modules
import { data } from '@/pages/Favourite';

const HomeFavourite: React.FC = () => {
  // return
  return (
    <Card
      style={{
        width: '100%',
      }}
      title={
        <Space>
          <Button icon={<Star />} shape="circle" type="text" />
          <Typography.Text>Favourite</Typography.Text>
        </Space>
      }
    >
      <Grid.Row gutter={[24, 16]}>
        {data.map((item) => {
          return (
            <Grid.Col key={item.key} span={4}>
              <Card
                style={{
                  borderRadius: '0.5rem',
                  width: '100%',
                }}
                onClick={() => {
                  window.open(item.url);
                }}
              >
                <Space>
                  <Avatar
                    style={{
                      backgroundColor: item.color,
                    }}
                    size={28}
                  >
                    {item.favicon ? (
                      <Image src={item.favicon} preview={false} />
                    ) : (
                      item.name.charAt(0)
                    )}
                  </Avatar>
                  <Typography.Title
                    style={{
                      width: '100%',
                    }}
                    ellipsis={{ showTooltip: true, wrapper: 'span' }}
                    heading={4}
                  >
                    {item.name}
                  </Typography.Title>
                </Space>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid.Row>
    </Card>
  );
};
export default HomeFavourite;
