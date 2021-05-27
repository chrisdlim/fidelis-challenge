export interface Alert {
  AlertId: number;
  AlertTime: string;
  Severity: string;
  ClientIP: string;
  ServerIP: string;
  Protocol: string;
  ClientCountry: string;
}

// Technically don't need this if you want to dynamically add filters, although you'd be using
// a Type of "any" for the filters
export interface AlertFilter {
  Severity?: string;
  ClientIP?: string;
  Protocol?: string;
  ClientCountry?: string;
}

export enum FilterTypes {
  SEVERITY = 'Severity',
  IP = 'ClientIP',
  PROTOCOL = 'Protocol',
  COUNTRY = 'ClientCountry',
}
