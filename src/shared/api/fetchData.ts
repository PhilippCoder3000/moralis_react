import { checkIfWalletConnected } from 'shared/api/contract/connectWallet';

export function fetchData() {
  return {
    wallet: wrapPromise(checkIfWalletConnected()),
  };
}

function wrapPromise<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      if (status === 'success') return result;
    },
  };
}