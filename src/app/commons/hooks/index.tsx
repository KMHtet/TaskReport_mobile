import {
  useFocusEffect as useFocusEffectRN,
  useRoute,
} from '@react-navigation/core';
import React, {EffectCallback, useCallback} from 'react';

export const useFocusEffect = (
  effect: EffectCallback,
  deps: React.DependencyList,
) => useFocusEffectRN(useCallback(effect, [effect, ...deps]));

/**
 * useParams hook to support getting params from navigation
 * @returns T - Must be a object type and defined as the same type as the params in the route
 *
 * @example
 * const params = useParams<{data: string}>();
 */
export const useParams = <T extends object = {}>() => {
  const {params} = useRoute();

  if (params) {
    return params as T;
  }

  return {} as T;
};
