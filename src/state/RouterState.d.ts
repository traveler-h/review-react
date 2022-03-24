export interface _RouteObject {
    caseSensitive?: boolean;
    children?: _RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path: string;
    name?: string;
    auth?: boolean
}
