import { Dispatch, SetStateAction, useState } from 'react';

function useBoolean(
  initial?: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!initial);
  return [value, setValue];
}

export default useBoolean;
