export type PostType = {
  userId: string;
  id: string | number;
  title: string;
  body: string;
};

export type PostDetailType = PostType & {
  comments: CommentType[];
  user: UserType;
};

export type CommentType = {
  postId: PostType["id"];
  id: number;
  name: string;
  email: UserType["email"];
  body: string;
};

export type UserType = {
  id: string | number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
