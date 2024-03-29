import { Product } from './../product.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

const EXAMPLE_DATA: Product[] = [
  {id: 1, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 2, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 3, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 4, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 5, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 6, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 7, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 8, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 9, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 10, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 11, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 12, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 13, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 14, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 15, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 16, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 17, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 18, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 19, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
  {id: 20, viatura: 'teste1', nomeMotorista: 'teste2', data: 'data', regfab: 'regfab', missao: 'missao', horarioSaida: '11:00', horarioChegada:'11:30', kmSaida: 123, kmChegada: 323,  name: 'Hydrogen', price: 9.99},
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductRead2DataSource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
