import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pagination',
    templateUrl: './pagination.html',
    styleUrls: ['./pagination.scss']
})

export class PaginationComponent implements OnInit {
    @Input() pageNumber: number;
    @Output() setPage = new EventEmitter<number>();
    pages: number[] = [];

    ngOnInit(){
        this.pages = Array.apply(null, {length: this.pageNumber}).map(Number.call, Number);
    }
    
}