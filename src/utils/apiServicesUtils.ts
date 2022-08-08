/* eslint-disable @typescript-eslint/no-unused-vars */
export const getHeader = ({
  method,
  endpoint,
}: {
  method?: string;
  endpoint?: string;
  params?: any;
}) => ({
  Accept: 'application/json',
  timestamp: Date.now(),
});
