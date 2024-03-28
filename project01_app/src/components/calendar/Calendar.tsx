'use client';

import dayjs, { Dayjs } from 'dayjs';
import styled from 'styled-components';
import { generateCalendarData, generateCalendarRenderingData } from '@/utils/calendar';
import { CalendarRenderingCellData, CellRenderingType } from '@/interface/calendar';
import { Days } from '@/constants/calendar';
import CalendarNavigator from './CalendarNavigator';
import { useEffect, useState } from 'react';

export default function Calendar() {
  const [targetDate, setTargetDate] = useState<Dayjs>(dayjs());
  const [renderingData, setRenderingData] = useState<CalendarRenderingCellData[] | null>(null);

  useEffect(() => {
    const data = generateCalendarData(targetDate);
    const renderingData = generateCalendarRenderingData(data);
    setRenderingData(renderingData);
  }, [targetDate]);

  const updateTargetDate = (action: 'subtract' | 'add') => {
    setTargetDate((prev) => prev[action](1, 'month'));
  };

  if (!renderingData) return null;

  return (
    <Container>
      <CalendarNavigator year={targetDate.year()} month={targetDate.month()} updateTargetDate={updateTargetDate} />

      <CalendarHeader>
        {Days.map((day) => (
          <CalendarHeaderCell key={day}>{day}</CalendarHeaderCell>
        ))}
      </CalendarHeader>
      <CalendarBody $totalrows={renderingData.length / 7}>
        {renderingData.map(({ date, type }, index) => (
          <CalendarBodyCell key={index} type={type}>
            {date}
          </CalendarBodyCell>
        ))}
      </CalendarBody>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0;
`;

const CalendarGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const CalendarHeader = styled(CalendarGridContainer)`
  margin: 10px 0;
`;
const CalendarBody = styled(CalendarGridContainer)<{ $totalrows: number }>`
  grid-template-rows: repeat(totalrows, calc(var(--calendar-height) / totalrows));
  height: var(--calendar-height);
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
`;
