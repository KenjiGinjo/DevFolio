type Exception = {
  message: string;
  code: string;
  status: string;
};
type MessageBody = {
  message: string;
  user: UserProfile;
};

export interface AdminServerToClientEvents {
  receiveMessage: (
    data: MessageBody,
    callback: ({ userId }: { userId: string }) => void,
  ) => void;
  exception: (data: Exception) => void;
}

export interface AdminClientToServerEvents {
  message: (
    data: MessageBody,
    err: Error,
    callback: (user: UserProfile) => void,
  ) => void;
}

export interface AdminInterServerEvents {
  ping: () => void;
}

export interface AdminSocketData {}

export interface ServerToClientEvents {
  receiveMessage: (
    data: MessageBody,
    callback: (user: UserProfile) => void,
  ) => void;
  exception: (data: Exception) => void;
}

export interface ClientToServerEvents {
  message: (data: MessageBody, callback: (user: UserProfile) => void) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {}
