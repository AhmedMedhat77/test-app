export enum UserTypes {
  GET_USER = "user/get",
}

export enum TodoTypes {
  GET_TODO = 'todo/get',
}


export type ActionTypes = UserTypes | TodoTypes;
