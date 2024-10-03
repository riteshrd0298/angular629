import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent implements OnInit{
  batchId: number | null = null;
  batches: any = {};  // To hold the batch's data

  // Static student list (same as in BatchListComponent)
  batchList = [
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
  ];
  constructor(private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    // Get the student ID from the URL
    this.batchId = Number(this.route.snapshot.paramMap.get('id'));

    // Find the student based on the ID
    this.batches = this.batchList.find(batches => batches.id === this.batchId);
  }
}