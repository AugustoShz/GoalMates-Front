import * as React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import moment from 'moment';

const PostCard = ({ body, createdAt, id, username, likes }: any): any => {
  <Card>
    <Card.Content>
      <Image
        floated="right"
        size="mini"
        src="https://react.semantic-ui.com/images/avatar/large/molly.png"
      />
      <Card.Header>{username}</Card.Header>
      <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>button here</p>
    </Card.Content>
  </Card>;
};

export default PostCard;
