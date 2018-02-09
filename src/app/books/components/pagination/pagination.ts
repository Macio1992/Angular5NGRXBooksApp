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
    @Input() totalPages: number;

    ngOnInit(){
        this.pages = Array.apply(null, {length: Math.ceil(this.pageNumber/this.totalPages)}).map(Number.call, Number);
    }
    
}