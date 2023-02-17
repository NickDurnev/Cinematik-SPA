import { forwardRef } from 'react';
import { FetchMarker } from './QueryTrigger.styled';

const QueryTrigger = forwardRef((_, ref) => <FetchMarker ref={ref} />);

export default QueryTrigger;
