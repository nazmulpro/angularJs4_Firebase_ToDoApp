export interface ITODO {
  $key?: string;
  isComplete: boolean;
  date: any;
  title: string;
}


export class TODO implements ITODO {

  isComplete = false;
  date = new Date().toISOString();
  title = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


