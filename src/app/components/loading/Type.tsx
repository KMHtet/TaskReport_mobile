export type LoadingProps = {
  isShow?: boolean;
};
export type LoadingRef = {
  show: (props?: LoadingProps) => void;
  close: () => void;
};
