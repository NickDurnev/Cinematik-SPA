import { forwardRef, LegacyRef } from 'react';
import { FetchMarker } from './QueryTrigger.styled';

const QueryTrigger = forwardRef((_, ref: LegacyRef<HTMLDivElement>) => <FetchMarker ref={ref} />);

export default QueryTrigger;
