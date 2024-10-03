import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent {

  batches:any=[
    {
      id:1,
      batch_name:"Batch 101"
    },
    {
      id:2,
      batch_name:"Batch 102"
    },
    {
      id:3,
      batch_name:"Batch 103"
    },
    {
      id:4,
      batch_name:"Batch 104"
    }
  ]
}
