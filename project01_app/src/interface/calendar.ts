/** 연 | 월 | 일 */
export interface DateBase {
  year: number;
  month: number;
  date: number;
}

export interface CalendarData extends DateBase {
  startOfDay: number; // 시작요일
  endOfDay: number; // 끝요일
  totalDays: number; // 총 일수
}

export interface CalendarRenderingCellData {
  date: number;
  day: number;
  type: CellRenderingType;
}

export type CellRenderingType = 'prev' | 'current' | 'next';
