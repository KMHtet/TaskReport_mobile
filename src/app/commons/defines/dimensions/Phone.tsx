import { fs, s, vs } from '@utils/ScaleUtils';
import {DimensionType} from './DimensionType';
export const PhoneDimension: DimensionType = {
  margin: vs(8),
  margin2: vs(12),
  margin3: vs(16),
  padding: vs(8),
  padding2: vs(12),
  padding3: vs(16),
  borderRadiusSmall: vs(4),
  borderRadius: vs(8),
  borderRadius1: vs(12),
  borderRadius2: vs(16),
  borderWidth: vs(0.5),
  fontSize10: vs(10),
  fontSize12: vs(12),
  fontSize: vs(14),
  fontSizeTitle: vs(20),
  lineHeight: vs(20),
  buttonHeightNormal: vs(48),
  letter: fs(-0.36),
  buttonHeight: vs(48),
  buttonRadius: s(7),
  buttonBorderWidth: vs(1),
};

export default PhoneDimension;
