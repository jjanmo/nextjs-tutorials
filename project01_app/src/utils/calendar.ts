import { CalendarData, CalendarRenderingCellData } from '@/interface/calendar';
import dayjs from 'dayjs';

export const generateCalendarRenderingData = (data: CalendarData) => {
  const { startOfDay, endOfDay, totalDays, year, month } = data;

  const currentMonthData: CalendarRenderingCellData[] = Array.from({ length: totalDays }, (_, i) => i + 1).map(
    (date) => ({
      date, // 날짜
      day: dayjs(`${year}-${month + 1}-${date}`).day(), // 요일
      type: 'current',
    })
  );

  const endDayOfPrevMonth = getEndDayOfPrevMonth({ year, month });
  const startDateOfPrevMonth = endDayOfPrevMonth - startOfDay + 1;

  const prevMonthData: CalendarRenderingCellData[] = Array.from({ length: startOfDay }, (_, i) => i).map((day) => ({
    date: startDateOfPrevMonth + day,
    day,
    type: 'prev',
  }));

  const nextMonthData: CalendarRenderingCellData[] = Array.from({ length: 6 - endOfDay }, (_, i) => i + 1).map(
    (date) => ({
      date,
      day: endOfDay + date,
      type: 'next',
    })
  );

  return [...prevMonthData, ...currentMonthData, ...nextMonthData];
};

export const getEndDayOfPrevMonth = ({ year, month }: { year: number; month: number }) => {
  const targetMonth = month === 0 ? 12 : month - 1;
  const targetYear = month === 0 ? year - 1 : year;

  return dayjs(`${targetYear}-${targetMonth + 1}`)
    .endOf('month')
    .date();
};
