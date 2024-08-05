import { ScaleType } from '@swimlane/ngx-charts';

export interface ChartSettings {
  className: string;
  colorScheme?: {
    domain: string[];
    name: string;
    selectable: boolean;
    group: ScaleType;
  };
}
