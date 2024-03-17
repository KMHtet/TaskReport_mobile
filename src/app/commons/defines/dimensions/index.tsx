import { DeviceUtils } from '@utils';
import PhoneDimension from './Phone';
import TabletDimension from './Tablet';
export * from './Phone';
export * from './Tablet';
export * from './DimensionType';
export const dimension = () => {
  if (DeviceUtils.isTablet()) {
    return TabletDimension;
  } else {
    return PhoneDimension;
  }
};
