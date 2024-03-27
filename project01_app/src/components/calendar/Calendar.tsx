'use client';

import dayjs from 'dayjs';
import styled from 'styled-components';
import { generateCalendarRenderingData } from '@/utils/calendar';
import { CellRenderingType, DateBase } from '@/interface/calendar';

export default function Calendar() {
  const now = dayjs();

  const nowData: DateBase = {
    year: now.year(),
    month: now.month(),
    date: now.date(),
  };

  const currentMonthData = {
    ...nowData,
    startOfDay: now.startOf('month').day(),
    endOfDay: now.endOf('month').day(),
    totalDays: now.endOf('month').date(),
  };

  const calendarData = generateCalendarRenderingData(currentMonthData);
  console.log(currentMonthData, calendarData);

  return (
    <Container>
      <CalendarGrid>
        {calendarData.map(({ date, day, type }) => (
          <CalendarCell key={`${date}-${day}`} type={type}>
            {date}
          </CalendarCell>
        ))}
      </CalendarGrid>
    </Container>
  );
}

const Container = styled.div``;

const CalendarGrid = styled.div`
  display: grid;
  max-width: 700px;
  grid-template-columns: repeat(7, 100px);
  border: 0.5px solid #f2f2f2;
`;

const CalendarCell = styled.div<{ type: CellRenderingType }>`
  display: flex;
  justify-content: center;
  min-width: 100px;
  min-height: 100px;
  padding: 10px;
  border: 0.5px solid #f2f2f2;
  color: ${({ type }) => (type === 'current' ? '#323232' : '#e1e1e1')};
  font-size: 14px;
`;
