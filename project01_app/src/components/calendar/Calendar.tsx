'use client';

import dayjs from 'dayjs';
import styled from 'styled-components';
import { generateCalendarRenderingData } from '@/utils/calendar';
import { CellRenderingType, DateBase } from '@/interface/calendar';
import { Days } from '@/constants/calendar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarNavigator from './CalendarNavigator';

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

  return (
    <Container>
      <CalendarNavigator year={now.year()} month={now.month()} />

      <CalendarHeader>
        {Days.map((day) => (
          <CalendarHeaderCell key={day}>{day}</CalendarHeaderCell>
        ))}
      </CalendarHeader>
      <CalendarBody>
        {calendarData.map(({ date, day, type }) => (
          <CalendarBodyCell key={`${date}-${day}`} type={type}>
            {date}
          </CalendarBodyCell>
        ))}
      </CalendarBody>
    </Container>
  );
}

const Container = styled.div`
  margin: 40px 0;
`;

const CalendarGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 130px));
  min-width: calc(100px * 7);
  max-width: calc(130px * 7);
`;
const CalendarHeader = styled(CalendarGridContainer)`
  margin: 10px 0;
`;
const CalendarBody = styled(CalendarGridContainer)`
  border: 0.5px solid #f2f2f2;
`;
const CalendarHeaderCell = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
`;
const CalendarBodyCell = styled.div<{ type: CellRenderingType }>`
  display: flex;
  justify-content: center;
  min-width: 100px;
  min-height: 100px;
  padding: 10px;
  border: 0.5px solid #f2f2f2;
  color: ${({ type }) => (type === 'current' ? '#323232' : '#e1e1e1')};
  font-size: 14px;
  aspect-ratio: 1 / 1;
`;
