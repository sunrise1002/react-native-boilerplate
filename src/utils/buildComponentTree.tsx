import React from 'react';

const BuildComponentTree = (providers: any[]) => {
  if (providers.length === 1) {
    return providers[0][0];
  }
  const [A, paramsA] = providers.shift();
  const [B, paramsB] = providers.shift();

  return BuildComponentTree([
    [
      ({children}: {children: React.ReactNode}) => (
        <A {...(paramsA || {})}>
          <B {...(paramsB || {})}>{children}</B>
        </A>
      ),
    ],
    ...providers,
  ]);
};

export default BuildComponentTree;
