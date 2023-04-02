declare module 'http' {
  export interface ServerResponse {
    locals: Record<string, unknown>;
  }
}
