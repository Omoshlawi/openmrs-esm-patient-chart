import { type ReactNode } from 'react';
import { type PatientVitalsAndBiometrics } from '../common';

export interface VitalsTableRow extends PatientVitalsAndBiometrics {
  id: string;
  dateRender: string;
  bloodPressureRender: string;
  pulseRender: string | number;
  spo2Render: string | number;
  temperatureRender: string | number;
  respiratoryRateRender: string | number;
  notesRender: ReactNode;
}

export interface VitalsTableHeader {
  key:
    | 'dateRender'
    | 'temperatureRender'
    | 'bloodPressureRender'
    | 'pulseRender'
    | 'respiratoryRateRender'
    | 'spo2Render'
    | 'notesRender';
  header: string;
  isSortable?: boolean;
  sortFunc: (valueA: VitalsTableRow, valueB: VitalsTableRow) => number;
}
