import React, {RefObject, useRef} from 'react';
import {BasePopupModalType} from './Type';
import {BasePopupView} from './BasePopupModal';
export * from './BasePopupModal';
export * from './Type';
let refs: RefObject<BasePopupView>[] = [];

function addNewRef(newRef: BasePopupView) {
  refs.push({
    current: newRef,
  });
}
function removeOldRef(oldRef?: BasePopupView) {
  refs = refs.filter(r => r.current !== oldRef);
}
export function BasePopupModal(props: BasePopupModalType) {
  const ModalRef = useRef<BasePopupView>();
  const setRef = React.useCallback(ref => {
    if (ref) {
      ModalRef.current = ref;
      addNewRef(ref);
    } else {
      removeOldRef(ModalRef?.current);
    }
  }, []);
  return <BasePopupView ref={setRef} {...props} />;
}

function getRef() {
  const reversePriority = [...refs].reverse();
  const activeRef = reversePriority.find(ref => ref?.current !== null);
  if (!activeRef) {
    return null;
  }
  return activeRef.current;
}
BasePopupModal.show = (props?: BasePopupModalType) => {
  getRef()?.show(props);
};
BasePopupModal.close = () => {
  getRef()?.close();
};
