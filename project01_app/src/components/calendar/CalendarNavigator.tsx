import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styled from 'styled-components';

interface Props {
  year: number;
  month: number;
}

export default function CalendarNavigator({ year, month }: Props) {
  return (
    <CanlendarNavigator>
      <button>
        <ChevronLeft color="#666565" strokeWidth={1.5} size={28} />
      </button>
      <CurrentDate>{dayjs(`${year}-${month + 1}`).format('YYYY년 MM월')}</CurrentDate>
      <button>
        <ChevronRight color="#666565" strokeWidth={1.5} size={28} />
      </button>
    </CanlendarNavigator>
  );
}

const CanlendarNavigator = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
const CurrentDate = styled.div`
  margin: 0 40px;
  font-size: 20px;
`;
