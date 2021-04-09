import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  foods: Food[] = [
    {value: 'viatura-1', viewValue: 'viatura 1'},
    {value: 'viatura-2', viewValue: 'viatura 2'},
    {value: 'viatura-3', viewValue: 'viatura 3'}
  ];

  
  product: Product = {
  
    viatura: this.foods[0].value,
    nomeMotorista: '',
    data: '',
    regfab: '',
    missao: '',
    horarioSaida: '',
    horarioChegada: '',
    kmSaida: 0,
    kmChegada: 0,
    name: '',
    price: 0

  }
  

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {

    
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
