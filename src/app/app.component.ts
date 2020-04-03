import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" },
  { position: 2, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" },
  { position: 3, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" },
  { position: 4, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" },
  { position: 5, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" },
  { position: 6, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" },
  { position: 7, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" },
  { position: 8, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" },
  { position: 9, time: "2014-02-17, 19:33:51", type: 2456, source: "bnsf.bnsfi.9299.itc", destination: "bnsf.bnsfi.9299.itc", summary: "Head End Milepost: 10033706 | Head End Track Name: MT 1 | Rear End Milepost: 10033110 | Rear End" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'my-app2';
  displayedColumns: string[] = ["position", 'time', 'type', 'source', 'destination', 'summary'];
  dataSource = ELEMENT_DATA;
}
